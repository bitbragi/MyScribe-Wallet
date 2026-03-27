import { Content, Header, Layout } from '@/ui/components';
import { Text } from '@/ui/components/Text';
import { RouteTypes, useNavigate } from '@/ui/pages/routeTypes';

/**
 * Inscription sending is not yet available.
 * This screen exists as a placeholder for the future implementation.
 */
export default function SendInscriptionScreen() {
    const navigate = useNavigate();

    return (
        <Layout>
            <Header
                onBack={() => navigate(RouteTypes.OrdinalsTabScreen)}
                title="Send Inscription"
            />
            <Content style={{ padding: 20, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text text="Inscription sending is coming soon." color="textDim" />
            </Content>
        </Layout>
    );
}
