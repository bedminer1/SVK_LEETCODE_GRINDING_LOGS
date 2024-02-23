<div class="h-full w-full flex flex-col justify-center items-center text-zinc-200">
<pre>
    <code>
        var findCheapestPrice = function(n, flights, src, dst, k) &#123
            const maxStops = k &gt= n ? n - 1: k
        
            let previous = new Array(n).fill(Infinity)
            previous[src] = 0
            
            const current = [...previous]
        
        // outer for loop if for updating prev to curr and it will only iterate if maxStops is not exceeded
            for (let i = 0; i  &lt= maxStops; i++) &#123
                flights.forEach(flight =&gt &#123
                    // price of getting to dst is either previously calculated price
                    // or cheapest price of prev + cost of prev to curr
                    current[flight[1]] = Math.min(
                    current[flight[1]], 
                    previous[flight[0]] + flight[2],
                    )
                    // console.log(flight, previous, current)
                &#125)
                previous = [...current]
            &#125
            return current[dst] === Infinity ? -1 : current[dst]
        &#125;
    </code>
</pre>

<a href="https://leetcode.com/problems/cheapest-flights-within-k-stops" target="_blank">see the question</a>

</div>