import { useNavigate } from "react-router-dom";
import "./breadcrumbs.scss";

export type BreadcrumbType = {
  id: string;
  name: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbType[];
  setItems: Function;
  onClick: Function;
};

export function Breadcrumbs(props: BreadcrumbsProps) {
  const navigate = useNavigate();
  const onClickBreadcrumb = function (item: BreadcrumbType, index) {
    props.setItems(() => {
      return props.items.slice(0, index);
    });
    props.onClick?.(item.id, item.name);
  };

  const mapBreadcrumbs = () => {
    return props.items.map(function (item: BreadcrumbType, index) {
      return (
        <li
          className="cursor-pointer font-mono"
          key={index}
          onClick={() => {
            onClickBreadcrumb(item, index);
          }}>
          <span className="text-gray-800">/ {item.name}</span>
        </li>
      );
    });
  };

  return (
    <nav className="flex my-4" aria-label="breadcrumb">
      <ol className="flex items-center space-x-4">
        <li
          className="cursor-pointer font-mono"
          onClick={() => {
            navigate("/box/");
          }}>
          <span className="text-gray-800">/ home</span>
        </li>
        {mapBreadcrumbs()}
      </ol>
    </nav>
  );
}
