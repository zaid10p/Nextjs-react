import Link from "next/link";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div style={{ margin: 10 }}>
      <ul>
        <li className="navli">
          <b>NEXT APP - </b>
        </li>
        <li className="navli">
          <Link href={"/"}>Home</Link>
        </li>
      </ul>
      <br />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
