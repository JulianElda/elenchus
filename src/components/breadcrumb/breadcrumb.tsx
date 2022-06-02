import { useNavigate } from "react-router-dom";

type BreadcrumbProp = {
  id: string;
  name: string;
};
type BreadcrumbsProps = {
  items: BreadcrumbProp[];
  setItems: Function;
  onClick: Function;
};

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const navigate = useNavigate();
  const onClickBreadcrumb = function (item: BreadcrumbProp, index) {
    props.setItems(() => {
      return props.items.slice(0, index);
    });
    props.onClick?.(item.id, item.name);
  };

  const mapBreadcrumbs = () => {
    return props.items.map(function (item: BreadcrumbProp, index) {
      return (
        <li
          className="breadcrumb-item font-monospace"
          key={index}
          onClick={() => {
            onClickBreadcrumb(item, index);
          }}>
          <span>{item.name}</span>
        </li>
      );
    });
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li
          className="breadcrumb-item font-monospace"
          onClick={() => {
            navigate("/box/");
          }}>
          <span>/ home</span>
        </li>
        {mapBreadcrumbs()}
      </ol>
    </nav>
  );
}
