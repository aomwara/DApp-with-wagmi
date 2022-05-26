import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <>
      <div style={{ position: "fixed", top: 20, right: 40 }}>
        <ConnectButton />
      </div>
    </>
  );
};

export default Navbar;
