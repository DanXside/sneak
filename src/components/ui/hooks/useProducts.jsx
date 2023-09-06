import { useMemo } from "react";

export const usePricing = (products, value1, value2) => {
    const sortedbByPrice = useMemo(() => {
        return products.filter(product => (value1 <= product.price && product.price <= value2));
    }, [products, value1, value2]);
    return sortedbByPrice;
};

export const useProducts = (products, sizes, value1, value2) => {
    const sortedbByPrice = usePricing(products, value1, value2);
    const trueSize = [];
    sizes.map(size => {
        if (size.check === true) {
            trueSize.push(size.value);
            return trueSize;
        }
    });

    let numSize = trueSize.map(item => Number(item));

    const sortedProducts = useMemo(() => {
        if (numSize.length) {
            return sortedbByPrice.filter(item => item.size.includes(numSize.find(num => {
                for (let i = 0; i < item.size.length; i++) {
                    if (num === item.size[i]) {
                        return num;
                    };
                };
            })));
        }
        return sortedbByPrice;
    }, [sortedbByPrice, numSize]);

    return sortedProducts;
};