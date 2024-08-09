import React, { useEffect } from 'react';
import styles from '../styles/Login.module.css';
import Layout from "../components/Layout";
import DataTable from "../components/DataTable";
import { useRouter } from 'next/router';
import { useAuth } from './../authContext';

let token = ""

interface Column<T> {
    key: keyof T;
    header: string;
  }

interface Product {
    gpro_id: number;
    gpro_name: string;
    gpri_company_name: string;
    sku_external: string;
    sku_internal: string;
    sku_barcode: string;
}

const Dashboard: React.FC = () => {
    const { authState, isAuthenticated } = useAuth();
    const router = useRouter();
    const columns: Column<Product>[] = [
        { key: 'gpro_id', header: 'ID' },
        { key: 'gpro_name', header: 'Name' },
        { key: 'gpri_company_name', header: 'Company' },
        { key: 'sku_external', header: 'SKU External' },
        { key: 'sku_internal', header: 'SKU Internal' },
        { key: 'sku_barcode', header: 'SKU Barcode' },
      ];


    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return <p>Loading...</p>;
    }

    token = authState.token
    console.log(authState.token);
    console.log("authState : " + token);


    return (
        <div className={styles.container}>
            <Layout title="Dashboard | Next.js + TypeScript + Electron Example">
                <h1>Dashboard</h1>
                <p>This is the Dashboard page</p>

                <DataTable<Product>
                    columns={columns}
                    apiUrl="https://apigateway-cms.aha.id/cms/master_data/list_master_product?page=1&limit=&search=&sort=product_name asc"
                    token={authState.token}
                />
            </Layout>
        </div>
    );
};


export default Dashboard;