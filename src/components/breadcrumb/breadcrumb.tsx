import { useRecoilState } from "recoil";

import { BreadcrumbItemType, breadcrumbState } from "./breadcrumb.atom";
import BreadcrumbItem from "./breadcrumb-item";

const boxUrl = "/box";

export default function Breadcrumb() {
  const [breadcrumbs] = useRecoilState(breadcrumbState);

  const mapBreadcrumbs = () => {
    return breadcrumbs.map(function (item: BreadcrumbItemType, index: number) {
      return (
        <BreadcrumbItem
          key={index}
          index={index + 1}
          url={boxUrl + item.url}
          name={item.name}
        />
      );
    });
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <BreadcrumbItem index={0} url={boxUrl} name="/ home" />
        {mapBreadcrumbs()}
      </ol>
    </nav>
  );
}
