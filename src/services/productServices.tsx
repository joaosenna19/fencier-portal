export const deleteProduct = async (id: string) => {
    const lowerCaseId = id.toLowerCase();
    const url = `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/material?id=${lowerCaseId}`;
    console.log(`Attempting to delete product with URL: ${url}`);

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        console.error(`Failed to delete product with id ${lowerCaseId}: ${response.statusText}`);
    }

    return response.ok;
};

export const saveProduct = async (product: any, url: string) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    if (response.ok) {
        return await response.json();
    }

    throw new Error('Failed to save product');
};

export const updateProduct = async (id: string, product: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FENCIER_API_URL}/material/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    if (response.ok) {
        return await response.json();
    }

    throw new Error('Failed to update product');
};