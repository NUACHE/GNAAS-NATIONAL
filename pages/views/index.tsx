import { DATASET } from "@/contants/dashboard_contants";
import {
  Avatar,
  Card,
  Divider,
  Input,
  Layout,
  Menu,
  MenuProps,
  theme,
} from "antd";
import Meta from "antd/es/card/Meta";
import { Footer } from "antd/es/layout/layout";
import Image from "next/image";
import React, { useState } from "react";
import DashboardHeader from "./dashboard/dashboard_header";
import DataCard from "./dashboard/data_card";
import SideNav from "./dashboard/sidenav";

const Dashboard = () => {
  const [isSideNavCollapsed, setIsSideNavCollapsed] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Header, Sider, Content } = Layout;
  return (
    <>
      <Layout className="h-full ">
        {/* Header component */}
        <DashboardHeader
          onClick={() => setIsSideNavCollapsed(!isSideNavCollapsed)}
        />
        <Layout>
          {/* Sidenav component */}
          <SideNav isCollapsed={isSideNavCollapsed} />

          <Layout style={{ padding: "4px 24px 24px 24px" }}>
            <div className="p-1 font-medium text-sky-900 text-lg">
              GNAAS - A BUILDER FOR CHRIST
            </div>
            <Content
              style={{
                padding: 0,
                margin: 0,
                minHeight: 280,

                //   background: colorBgContainer,
              }}
            >
                {/* List of options */}
              <div className="grid grid-cols-4 gap-4 auto-cols-max">
                {DATASET.map((data) => {
                  return <DataCard title={data.title} number={data.number} />;
                })}
              </div>
              {/* National Executives */}
              <div className="my-4 block overflow-hidden rounded-md bg-white p-6 shadow-lg hover:bg-stone-50 hover:cursor-pointer ">
                <h5 className="mb-2 text-md font-medium leading-tight text-sky-900 ">
                  {"NATIONAL EXECUTIVES"}
                </h5>
                <div className=" mt-4 items-center">
                  <div className=" text-xs   ">
                    {"Details of National Executive"}
                  </div>
                  <div className="w-99/100 m-4  px-2 py-2 bg-blue-200 text-sky-800">
                    No Records Available
                  </div>
                </div>
              </div>
              {/* Divider */}
              <Divider />
              <Footer className="text-xs" style={{ textAlign: 'center' }}>© Copyright GNAAS - A BUILDER FOR CHRIST. All Rights Reserved</Footer>
     
              {/* Copyright */}
            </Content>
            
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
