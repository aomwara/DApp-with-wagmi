import useToken from "../hooks/useToken";
import TokenAddress from "../constants/TokenAddress.json";
import useAccounts from "../hooks/useAccount";
import useBank from "../hooks/useBank";

const Home = () => {
  const { address } = useAccounts();
  const { write: handleApprove } = useToken(TokenAddress.DAI, "approve", [
    "0xCfc597a8793E0ca94FC8310482D9e11367cfCA24",
    1000000000000,
  ]);

  const { write: handleDeposit } = useBank("deposit", [1000000000000]);

  const deposit = async () => {
    await handleApprove();
  };

  return (
    <>
      <h1>Approve DAI</h1>
      your address: {address}
      <br />
      <button
        onClick={() => {
          deposit();
        }}
      >
        Appove DAI
      </button>
    </>
  );
};
export default Home;
