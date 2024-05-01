export interface FAQRow {
    title: string;
    content: string;
}

export interface FAQData {
    title: string;
    rows: FAQRow[];
}