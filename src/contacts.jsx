import { useSelector } from "react-redux";

export default function Contacts() {
  const list = useSelector((state) => state.contactsList);
  console.log(list);

  return <div>hi</div>;
}
