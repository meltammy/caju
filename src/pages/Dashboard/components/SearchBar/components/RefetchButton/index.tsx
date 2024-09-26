import { HiRefresh } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";

type Props = {
  refetch: () => void;
};

export function RefetchButton({ refetch }: Props) {
  return (
    <IconButton aria-label="refetch" onClick={refetch} id="refresh-button">
      <HiRefresh />
    </IconButton>
  );
}
