# Price Range Component

# Example

```javascript
import React from 'react';
import './App.css';
import PriceRange from './PriceRange/PriceRange';

function App() {
  
    const [priceFilter, setPriceFilter] = React.useState<[number, number]>([
        0, 0,
    ]);

    return (
        <div className='App'>

            <PriceRange
                label='Price Range'
                description='Select your price range'
                currency='лв'
                min={0}
                max={100}
                step={1}
                pearling={true}
                minDistance={1}
                onChange={(value) => {
                    setPriceFilter(value);
                }}
            />

            <div
                style={{
                    marginTop: '20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                }}
            >
                Result: {priceFilter[0]} - {priceFilter[1]}
            </div>
        </div>
    );
}

export default App;


```
