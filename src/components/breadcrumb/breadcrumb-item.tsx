import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import {
  BreadcrumbItemType,
  breadcrumbState,
} from "components/breadcrumb/breadcrumb.atom";

export default function BreadcrumbItem(props: BreadcrumbItemType) {
  const navigate = useNavigate();
  const [, setBreadcrumbs] = useRecoilState<any>(breadcrumbState);

  const onClick = () => {
    setBreadcrumbs((bread) => bread.slice(0, props.index - 1));
    navigate(props.url);
  };

  return (
    <li className="breadcrumb-item font-monospace">
      <span onClick={onClick}>{props.name}</span>
    </li>
  );
}
