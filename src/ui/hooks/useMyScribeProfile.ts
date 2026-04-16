import { useEffect, useState } from 'react';
import { MyScribeProfileService, type MyScribeProfile } from '@/shared/services/MyScribeProfileService';

/**
 * React hook that resolves a MyScribe profile for the given wallet.
 * Pass the quantumPublicKeyHash (MLDSA address hash) — this is what the
 * MyScribe Factory contract uses to look up profiles.
 *
 * Returns the avatarInscId (Ordinals inscription ID for the pfp) if the user
 * has a MyScribe account on the current OPNet network, or null otherwise.
 */
export function useMyScribeProfile(quantumPublicKeyHash: string | undefined) {
    const [profile, setProfile] = useState<MyScribeProfile | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!quantumPublicKeyHash) {
            setProfile(null);
            return;
        }

        let cancelled = false;
        setLoading(true);

        MyScribeProfileService.getProfile(quantumPublicKeyHash)
            .then((result) => {
                if (!cancelled) {
                    setProfile(result);
                }
            })
            .catch((err) => {
                console.warn('[useMyScribeProfile] lookup failed:', err);
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
    }, [quantumPublicKeyHash]);

    return {
        avatarInscId: profile?.avatarInscId ?? null,
        username: profile?.username ?? null,
        displayName: profile?.displayName ?? null,
        loading
    };
}
