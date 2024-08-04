export interface PriceRangeProps {
    min: number,
    max: number,
    step?: number,
    pearling?: boolean,
    minDistance?: number,
    onChange: (value: [number, number]) => void,
    label: string,
    description: string
    currency: string
}