import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyIcon from '@material-ui/icons/Money';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { useStyles } from './styles';
import { AccountsClasificationContainer } from '/imports/ui/containers/AccountsClasificationContainer';
import { AccountsCatalogContainer } from '/imports/ui/containers/AccountsCatalogContainer';

const Settings = props => {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    const setTab = (event, value) => {
        console.log(`value`, value);

        setSelectedTab(value);
    };

    const renderTabs = () => {
        let tab = null;

        // TODO: Remove the other cases (are just for example) and add the correct ones
        switch (selectedTab) {
            case 0:
                tab = <AccountsClasificationContainer />;
                break;

            case 1:
                tab = <AccountsCatalogContainer />;
                break;

            case 2:
                tab = (<label htmlFor="">Indices Financieros</label>);
                break;

            case 3:
                tab = (<label htmlFor="">Prueba</label>);
                break;

            case 4  :
                tab = (<label htmlFor="">Test, jsut a test tab</label>);
                break;
        
            default:
                break;
        }

        return (
            <div className={classes.tabsContainer}>
                {tab}
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                color="default"
            >
                <Tabs
                    centered
                    indicatorColor="primary"
                    onChange={setTab}
                    textColor="primary"
                    value={selectedTab}
                >
                    <Tab
                        label="Clasificación de Cuentas"
                        icon={<LaptopChromebookIcon />}
                    />
                    <Tab
                        label="Catálogo de Cuentas"
                        icon={<LibraryBooksIcon />}
                    />
                    <Tab
                        label="Índices Financieros"
                        icon={<AttachMoneyIcon />}
                    />
                    <Tab
                        label="Catálogo de Pruebas"
                        icon={<LaptopChromebookIcon />}
                    />
                    <Tab
                        label="Test"
                        icon={<MoneyIcon />}
                    />
                </Tabs>
            </AppBar>
            <div className={classes.tabsContainer}>
                {renderTabs()}
            </div>
        </div>
    );
};

export default Settings;
