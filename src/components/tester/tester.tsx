import { generate_BoxListResponseType } from "api/box";

import { BoxList } from "components/box-list";

export default function Tester() {
  const asd = generate_BoxListResponseType();
  return (
    <>
      <BoxList boxes={asd.listBoxes} />
    </>
  );
}
