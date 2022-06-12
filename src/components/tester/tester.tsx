import { resolveBoxes } from "components/common/resolve-boxes";

export default function Tester() {

  const callback = function(res) {
    console.log(JSON.stringify(res))
  }

  resolveBoxes().then(callback)

  return (<p>tester</p>);
}