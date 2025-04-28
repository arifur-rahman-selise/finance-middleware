import * as dmUtils from "./dm-utils";

/*
 * title : "root",
 * inputType : "JSON",
 */
interface Root {
    status: string;
    message: string;
    data: {
        payment_id: string;
        amount: number;
        currency: string;
        payment_method: string;
        card_last_four: string;
        card_brand: string;
        expiration_date: string;
        billing_address: {
            name: string;
            street: string;
            city: string;
            state: string;
            postal_code: string;
            country: string;
        };
        payment_status: string;
        created_at: string;
        updated_at: string;
        transaction_id: string;
        invoice_id: string;
        refunded_amount: number;
        payment_processor: string;
        customer_id: string;
    };
    links: {
        self: string;
        invoice: string;
        receipt: string;
    };
}

/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    paymentAmount: number
    paymentCurrency: string
    cardBrand: string
    cardLastDigits: string
    paymentDate: string
    payeeId: string
    payeeName: string
    payeeAddress: string
    paymentInvoiceId: string
    paymentTransactionId: string
    paymentStatus: string
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        paymentAmount: input.data.amount,
        cardBrand: input.data.card_brand,
        cardLastDigits: input.data.card_last_four,
        paymentDate: input.data.created_at,
        payeeName: input.data.billing_address.name,
        payeeId: input.data.customer_id,
        paymentInvoiceId: input.data.invoice_id,
        paymentTransactionId: input.data.transaction_id,
        paymentStatus: input.data.payment_status,
        payeeAddress: input.data.billing_address.street + " " + input.data.billing_address.city + " " + input.data.billing_address.state + " " + input.data.billing_address.country,
        paymentCurrency: input.data.currency
    }
}

