import { FC } from "react";
import "./Specs.css";
import { Spec } from "../../types/types";

export interface SpecsProps {
    items?: Spec[];
}

export const Specs: FC<SpecsProps> = ({ items }) => {
    if (!items?.length) return null;

    return <dl className="specs">
        {items.map(item =>
            <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
            </div>
        )}
    </dl>
}
