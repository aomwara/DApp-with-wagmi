import { useContractRead } from "wagmi";
import useSigner from "../../useSigner";
import Address from "../../../constants/Address.json";
import ERC20_ABI from "../../../constants/ERC20ABI.json";

const useBalance = (address) => {
  const signer = useSigner();
  const {
    data: DAIBalance,
    isError,
    isLoading,
  } = useContractRead(
    {
      addressOrName: Address.DAI,
      contractInterface: ERC20_ABI,
      signerOrProvider: signer,
    },
    "balanceOf",
    {
      args: address,
    }
  );

  return { DAIBalance, isError, isLoading };
};

export default useBalance;
