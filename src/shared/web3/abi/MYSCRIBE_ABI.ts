import { ABIDataTypes } from '@btc-vision/transaction';
import { BitcoinAbiTypes, type BitcoinInterfaceAbi } from 'opnet';

/**
 * MyScribe Factory contract address (OPNet Testnet).
 * Maps wallet addresses to deployed profile contracts.
 */
export const MYSCRIBE_FACTORY_ADDRESS =
    '0x87324a64968d8000b211477e8163ff3129db6597fcd9fbf50311cbf3102ffc76';

/**
 * MyScribe Factory ABI — resolves wallet address → profile contract address.
 */
export const MYSCRIBE_FACTORY_ABI: BitcoinInterfaceAbi = [
    {
        name: 'resolveAddress',
        constant: true,
        inputs: [{ name: 'walletAddress', type: ABIDataTypes.ADDRESS }],
        outputs: [{ name: 'contractAddress', type: ABIDataTypes.UINT256 }],
        type: BitcoinAbiTypes.Function
    },
    {
        name: 'isRegistered',
        constant: true,
        inputs: [{ name: 'walletAddress', type: ABIDataTypes.ADDRESS }],
        outputs: [{ name: 'registered', type: ABIDataTypes.BOOL }],
        type: BitcoinAbiTypes.Function
    }
];

/**
 * MyScribe Profile contract ABI — returns user profile metadata.
 */
export const MYSCRIBE_PROFILE_ABI: BitcoinInterfaceAbi = [
    {
        name: 'getProfile',
        constant: true,
        inputs: [],
        outputs: [
            { name: 'username', type: ABIDataTypes.STRING },
            { name: 'displayName', type: ABIDataTypes.STRING },
            { name: 'bio', type: ABIDataTypes.STRING },
            { name: 'avatarInscId', type: ABIDataTypes.STRING },
            { name: 'cssInscId', type: ABIDataTypes.STRING },
            { name: 'playlistPointer', type: ABIDataTypes.STRING },
            { name: 'blurbCount', type: ABIDataTypes.UINT256 },
            { name: 'guestbookCount', type: ABIDataTypes.UINT256 },
            { name: 'totalSupply', type: ABIDataTypes.UINT256 }
        ],
        type: BitcoinAbiTypes.Function
    }
];
