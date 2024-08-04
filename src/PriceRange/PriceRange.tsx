import React from 'react';
import './PriceRange.scss';
import ReactSlider from 'react-slider';
import { PriceRangeProps } from './PriceRangeProps';
import { useRef } from 'react';

const PriceRange = (props: PriceRangeProps) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
        props.min,
        props.max,
    ]);

    const initialValues = useRef<[number, number]>([
        priceRange[0],
        priceRange[1],
    ]);

    return (
        <div className='zb-price-range-wrap'>
            <div className='zb-price-range-label'>{props.label}</div>
            <div className='zb-price-range-desc'>{props.description}</div>
            <ReactSlider
                className='zb-price-range-slider'
                thumbClassName='zb-price-range-slider-thumb'
                trackClassName='zb-price-range-slider-track'
                min={props.min}
                max={props.max}
                step={props.step ?? 1}
                withTracks={true}
                value={[priceRange[0], priceRange[1]]}
                pearling={props.pearling ?? false}
                minDistance={props.minDistance ?? 1}
                onChange={(value) => {
                    const [min, max] = value;
                    setPriceRange([min, max]);
                }}
            />
            <div className='zb-price-range-slider-wrap'>
                <ReactSlider
                    className='zb-price-range-slider'
                    thumbClassName='zb-price-range-slider-thumb'
                    trackClassName='zb-price-range-slider-track'
                    min={props.min}
                    max={props.max}
                    step={props.step ?? 1}
                    withTracks={true}
                    value={[priceRange[0], priceRange[1]]}
                    pearling={props.pearling ?? true}
                    minDistance={props.minDistance ?? 1}
                    onChange={(value) => {
                        const [min, max] = value;
                        setPriceRange([min, max]);
                    }}
                />
            </div>

            <div className='zb-price-range-input-wrap'>
                <div>
                    <div className='zb-price-range-input-label'>Minimum</div>
                    <input
                        type='text'
                        value={`${priceRange[0]}`}
                        onChange={(e) => {
                            const number = Number(e.target.value);

                            if (!isNaN(number)) {
                                let value1 = Math.min(number, props.max);
                                let value2 = priceRange[1];

                                if (value1 > value2) {
                                    value2 = value1;
                                }

                                setPriceRange([value1, value2]);
                            }
                        }}
                    />
                    <div className='zb-price-currency-label'>
                        {props.currency}
                    </div>
                </div>
                <div className='zb-price-range-input-dash'>&mdash;</div>
                <div>
                    <div className='zb-price-range-input-label'>Maximum</div>
                    <input
                        type='text'
                        value={priceRange[1]}
                        onChange={(e) => {
                            const number = Number(e.target.value);

                            if (!isNaN(number)) {
                                let value1 = priceRange[0];
                                let value2 = Math.min(number, props.max);

                                if (value2 < value1) {
                                    value1 = value2;
                                }

                                setPriceRange([value1, value2]);
                            }
                        }}
                    />
                    <div className='zb-price-currency-label'>
                        {props.currency}
                    </div>
                </div>
            </div>

            <div className='zb-price-range-button-wrap'>
                <div
                    className='zb-price-range-button-clear'
                    onClick={() => {
                        setPriceRange(initialValues.current);
                        props.onChange(initialValues.current);
                    }}
                >
                    Clear
                </div>
                <div
                    className='zb-price-range-button-apply'
                    onClick={() => {
                        props.onChange(priceRange);
                    }}
                >
                    Apply
                </div>
            </div>
        </div>
    );
};

export default PriceRange;
