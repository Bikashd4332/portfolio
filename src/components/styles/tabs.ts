import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(
    tabsAnatomy.keys,
);

const widerVariant = definePartsStyle({
    root: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
    },
    tablist: {
        display: 'flex',
        position: 'relative',
        width: 'max-content',
        flexDirection: 'column',

        '& .tab-border': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '2px',
            height: '42px',
            transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s',
            background: 'lightteal.700',
            borderRadius: '4px',
        },
    },
    tabpanel: {
        width: '100%',
        height: 'auto',
        padding: '10px 5px',
    },
    tab: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        borderLeftWidth: '2px',
        borderLeftColor: 'navyblue.50',
        minHeight: '42px',
        whiteSpace: 'nowrap',
        padding: '0 20px 2px',
        backgroundCoor: 'transparent',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        _hover: {
            backgroundColor: 'navyblue.300',
            color: 'lightteal.700',
        },
        _selected: {
            color: 'lightteal.700',
        },
    },
});

const lineVariant = definePartsStyle({
    tablist: {
        overflowX: 'auto',
        position: 'relative',
        zIndex: 3,
        paddingLeft: '25px',
        marginLeft: '-25px',
        marginBottom: '30px',

        '& .tab-border': {
            position: 'absolute',
            top: 'auto',
            bottom: '0px',
            width: '100%',
            maxWidth: '158px',
            height: '2px',
            transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s',
            background: 'lightteal.700',
            borderRadius: '4px',
        },
    },
    tab: {
        _hover: {
            backgroundColor: 'navyblue.300',
            color: 'lightteal.700',
        },
        _selected: {
            color: 'lightteal.700',
        },
        width: '100%',
        minWidth: '158px',
        height: '42px',
        padding: '0px 15px',
        borderBottomWidth: '2px',
        borderBottomColor: 'navyblue.50',
    },
});

const variants = { wider: widerVariant, line: lineVariant };

const Tabs = defineMultiStyleConfig({ variants });

export default Tabs;
