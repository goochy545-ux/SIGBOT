/**
 * SIGBOT DASHBOARD SIMULATION
 * 
 * Synchronizes with CSS animations to simulate live data updates.
 * Animation Loop: 8 seconds
 * "Click" Event: ~53% (4.24s)
 */

(function initSimulation() {
    const TOTAL_STAT_ID = 'mock-stat-total';
    const RECENT_LIST_ID = 'mock-recent-list';
    const ANIM_DURATION = 8000; // 8s
    const CLICK_TIME = 4240; // 53% of 8s (Add Button press)

    let contactCount = 2543;

    // Fake data generator
    const firstNames = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'David', 'Elizabeth', 'William', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
    const companies = ['Acme Corp', 'Global Tech', 'BuildRight Inc.', 'Stark Ind.', 'Wayne Ent.', 'Cyberdyne', 'Massive Dynamic', 'Initech'];

    function getRandomContact() {
        const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
        const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
        const co = companies[Math.floor(Math.random() * companies.length)];
        return {
            name: `${fn} ${ln}`,
            company: co
        };
    }

    function addMockContact() {
        // 1. Update Total
        contactCount++;
        const totalEl = document.getElementById(TOTAL_STAT_ID);
        if (totalEl) {
            totalEl.textContent = contactCount.toLocaleString();
            // Flash effect
            totalEl.style.color = '#10b981';
            totalEl.style.transition = 'color 0.2s';
            setTimeout(() => { totalEl.style.color = ''; }, 300);
        }

        // 2. Add to List
        const listEl = document.getElementById(RECENT_LIST_ID);
        if (listEl) {
            const contact = getRandomContact();

            const row = document.createElement('div');
            row.style.cssText = `
        display: flex; 
        justify-content: space-between; 
        padding: 12px; 
        background: rgba(16, 185, 129, 0.1); 
        border-radius: 6px; 
        align-items: center;
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.5s ease;
        border-left: 2px solid #10b981;
      `;

            row.innerHTML = `
        <div style="font-weight: 500; font-size: 14px;">${contact.name} <span style="color: #888; margin-left: 8px; font-size: 12px;">${contact.company}</span></div>
        <div style="font-size: 11px; padding: 4px 8px; background: rgba(16, 185, 129, 0.2); color: #10b981; border-radius: 4px;">JUST NOW</div>
      `;

            // Prepend
            listEl.insertBefore(row, listEl.firstChild);

            // Animate in
            requestAnimationFrame(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateX(0)';
                // Reset background after a bit
                setTimeout(() => {
                    row.style.background = 'rgba(255,255,255,0.03)';
                    row.style.borderLeft = 'none';
                }, 2000);
            });

            // Maintain max length
            if (listEl.children.length > 5) {
                listEl.lastElementChild.remove();
            }
        }
    }

    // Sync Loop
    // Wait for the cursor calculation to align or just start interval?
    // Since CSS animation starts immediately on load, we can just sync roughly.
    // Ideally we listen to animationiteration if we could select the cursor.

    const cursor = document.querySelector('.cursor');
    if (cursor) {
        // Wait for the first loop to sync correctly
        // The CSS animation is infinite 12s.

        // We set a timeout to match the first "click" time
        // But CSS animation time is relative to page load/render. 
        // Let's rely on standard interval but try to sync start.

        let loopInterval;

        function runLoop() {
            // Set the interval to exactly 12000ms
            loopInterval = setInterval(() => {
                // Delay action by the click time (5.1s) relative to loop start
                // Actually, setInterval callback fires AT the interval.
                // We want to fire at t=5.1s, t=17.1s, etc.

                // Let's just create a function that delays execution
            }, ANIM_DURATION);
        }

        // Better approach: Listen for 'animationiteration' on cursor. 
        // This fires at the END of a loop (12s). 
        // The first loop end happens at 12s. We missed the first click (5s).
        // So we handle the first click with a timeout.

        // 1. First Click
        setTimeout(() => {
            addMockContact();
        }, CLICK_TIME);

        // 2. Subsequent Clicks (Every loop iteration)
        cursor.addEventListener('animationiteration', () => {
            setTimeout(() => {
                addMockContact();
            }, CLICK_TIME);
        });
    }
})();
