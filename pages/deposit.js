import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useApprove } from "../hooks/contracts/DAI";
import useAccounts from "../hooks/useAccount";
import Address from "../constants/Address.json";
import { Card, Input, Button } from "@nextui-org/react";

const Home = () => {
  const { address } = useAccounts();
  const [amount, setAmount] = useState(0);
  const [isLoading, setLoading] = useState(false);

  //create instance for approve
  const { handleApprove, data: approveData } = useApprove(
    Address.Bank,
    amount == 0
      ? ethers.utils.parseEther("0.1")
      : ethers.utils.parseEther(amount)
  );

  //handle approve
  const handleClickApprove = () => {
    setLoading(true);
    handleApprove();
  };

  //check confirm tx
  useEffect(() => {
    approveData?.wait().then((resp) => {
      setLoading(false);
    });
  }, [approveData]);

  return (
    <>
      <center>
        <h1>Deposit</h1>
        <small> Account: {address}</small>

        <br />
        <Card css={{ mw: "400px", mt: 20, p: 10 }}>
          <Input
            css={{ mt: 30 }}
            clearable
            type="number"
            underlined
            labelPlaceholder="Amount"
            initialValue={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <Button
            css={{ mt: 10 }}
            onClick={handleClickApprove}
            disabled={isLoading}
            size="sm"
          >
            {isLoading ? "Waiting for transaction confirm ..." : "Deposit"}
          </Button>
        </Card>
      </center>
    </>
  );
};
export default Home;
