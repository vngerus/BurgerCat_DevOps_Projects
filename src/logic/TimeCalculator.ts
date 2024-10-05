interface CartItem {
    name: string;
    quantity: number;
    price: number;
    category: string; 
}

export const calculatePreparationTime = (items: CartItem[]): number => {
    let maxTime = 0;

    items.forEach(item => {
        if (item.category === 'hamburguesa') {
            maxTime = Math.max(maxTime, 10);
        } else if (item.category === 'postre') {
            maxTime = Math.max(maxTime, 8);
        } else if (item.category === 'helado') {
            maxTime = Math.max(maxTime, 6);
        } else if (item.category === 'caja') {
            maxTime = Math.max(maxTime, 8);
        } else if (item.category === 'bebida') {
            if (items.some(i => i.category === 'hamburguesa')) {
                maxTime = Math.max(maxTime, 10);
            } else {
                maxTime = Math.max(maxTime, 2);
            }
        }
    });

    return maxTime;
};
