import { FC } from "react";
import "./Specs.css";
import { Spec } from "../../types/types";
import { useLocale } from "../../hooks/useLocale";

export interface SpecsProps {
    items?: Spec[];
}

export const Specs: FC<SpecsProps> = ({ items }) => {
    const { pick } = useLocale();
    if (!items?.length) return null;

    return <dl className="specs">
        {items.map(item =>
            <div key={item.label}>
                <dt>{pick(item.label, item.labelNL || item.label)}</dt>
                <dd>{pick(item.value, item.valueNL || item.value)}</dd>
            </div>
        )}
    </dl>
}
