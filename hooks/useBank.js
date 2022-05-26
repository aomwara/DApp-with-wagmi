import { useProvider, useContractWrite } from "wagmi";
import useAccounts from "./useAccount";
import ContractAddress from "../constants/ContractAddress.json";
import ERC20_ABI from "../constants/BankABI.json";

const useBank = (methods, args) => {
  const { address: userAddress } = useAccounts();
  const provider = useProvider();
  const signer = provider.getSigner(userAddress);

  const { data, isError, isLoading, write } = useContractWrite(
    {
      addressOrName: ContractAddress.Bank,
      contractInterface: ERC20_ABI,
      signerOrProvider: signer,
    },
    methods,
    {
      args: args,
    }
  );

  return { data, isError, isLoading, write };
};

export default useBank;
