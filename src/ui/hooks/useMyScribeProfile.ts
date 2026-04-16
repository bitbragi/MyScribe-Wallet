import { useEffect, useState } from 'react';
import { MyScribeProfileService, type MyScribeProfile } from '@/shared/services/MyScribeProfileService';

/**
 * React hook that resolves a MyScribe profile for the given wallet address.
 * Returns the avatarInscId (Ordinals inscription ID for the pfp) if the user
 * has a MyScribe account on the current OPNet network, or null otherwise.
 *
 * Results are cached with TTL by MyScribeProfileService.
 */
export function useMyScribeProfile(address: string | undefined) {
    const [profile, setProfile] = useState<MyScribeProfile | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!address) {
            setProfile(null);
            return;
        }

        let cancelled = false;
        setLoading(true);

        MyScribeProfileService.getProfile(address)
            .then((result) => {
                if (!cancelled) {
                    setProfile(result);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setProfile(null);
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [address]);

    return {
        avatarInscId: profile?.avatarInscId ?? null,
        username: profile?.username ?? null,
        displayName: profile?.displayName ?? null,
        loading
    };
}
