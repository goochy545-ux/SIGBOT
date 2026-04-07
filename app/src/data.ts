export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
    phone: string;
    mobile?: string;
    location: string;
    website?: string;
    sector?: string;
    businessType?: string;
    source: string;
    tags?: string;
    notes?: string;
    latitude?: number;
    longitude?: number;
    createdAt: string;
}

export const contacts: Contact[] = [
    {
        firstName: 'Danny', lastName: 'Nickel',
        email: 'danny.nickel@sml.ca',
        company: 'Strathcona Mechanical Limited',
        jobTitle: 'Senior Estimator',
        phone: '+1 (780) 980-1122', location: '—',
        source: 'OUTLOOK',
        latitude: 53.5461, longitude: -113.4938,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Jackson', lastName: 'Carcueva',
        email: 'jacksonc@ener-spray.ca',
        company: 'Licensed Applicator for:',
        jobTitle: 'Project Manager',
        phone: '—', location: '—',
        source: 'OUTLOOK',
        latitude: 49.2827, longitude: -123.1207,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Kathy', lastName: "O'Hanley",
        email: 'kathy.ohanley@flynncompa...',
        company: 'A member of the Flynn Group of Companies',
        jobTitle: 'Estimating Manager',
        phone: '+1 (250) 448-2675', location: '—',
        source: 'OUTLOOK',
        latitude: 48.4284, longitude: -123.3656,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Estimation', lastName: '- AJPH',
        email: 'Estimation@ajph.com',
        company: 'Ajph',
        jobTitle: '—',
        phone: '—', location: '—',
        source: 'OUTLOOK',
        latitude: 45.5017, longitude: -73.5673,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Tim', lastName: 'Christensen',
        email: 'tim@islandmetalcraft.ca',
        company: 'Islandmetalcraft',
        jobTitle: '—',
        phone: '+1 (250) 383-4815', location: 'A: 540 William Street',
        source: 'OUTLOOK',
        latitude: 48.4284, longitude: -123.3656,
        createdAt: new Date(Date.now() - 22 * 3600000).toISOString()
    },
    {
        firstName: 'Kathy', lastName: 'Parkinson',
        email: 'kathy@ravensc.ca',
        company: 'Owner - RavenStone Constr...',
        jobTitle: 'CFO',
        phone: '+1 (250) 748-7700', location: '—',
        source: 'OUTLOOK',
        latitude: 48.7767, longitude: -123.7058,
        createdAt: new Date(Date.now() - 23 * 3600000).toISOString()
    },
    {
        firstName: 'Brad', lastName: 'Greenbank',
        email: 'brad@alpharoofing.ca',
        company: 'Alpha Roofing & Cladding Inc',
        jobTitle: 'Director',
        phone: '+1 (250) 544-0169', location: '—',
        source: 'OUTLOOK',
        latitude: 49.1666, longitude: -123.9401,
        createdAt: new Date(Date.now() - 23 * 3600000).toISOString()
    },
    {
        firstName: 'Grant', lastName: 'MacDonald',
        email: 'grant.macdonald@teamhori...',
        company: 'Teamhorizon',
        jobTitle: 'Preconstruction Manager',
        phone: '+1 (604) 533-9757', location: '27078 56 Ave',
        source: 'OUTLOOK',
        latitude: 49.1044, longitude: -122.6609,
        createdAt: new Date(Date.now() - 24 * 3600000).toISOString()
    },
    {
        firstName: 'dalcon', lastName: '@shaw.ca Roys',
        email: 'dalcon@shaw.ca',
        company: 'Business Admin. &',
        jobTitle: '—',
        phone: '+1 (250) 743-1449', location: 'Physical Address: Unit B 148...',
        source: 'OUTLOOK',
        latitude: 48.7438, longitude: -123.7088,
        createdAt: new Date(Date.now() - 24 * 3600000).toISOString()
    },
    {
        firstName: 'Mathew', lastName: 'Schultz',
        email: 'Mathew.Schultz@norlandlim...',
        company: 'Norlandlimited',
        jobTitle: 'Preconstruction Manager',
        phone: '+1 (250) 748-3132', location: 'Address: 8338 Crofton Rd, ...',
        source: 'OUTLOOK',
        latitude: 48.8612, longitude: -123.6523,
        createdAt: new Date(Date.now() - 25 * 3600000).toISOString()
    },
    {
        firstName: 'Anand', lastName: 'Mitchell',
        email: 'Anand.Mitchell@norlandlimi...',
        company: 'Norlandlimited',
        jobTitle: 'Project Manager',
        phone: '21010108', location: 'British Columbia Branch: 29...',
        source: 'OUTLOOK',
        latitude: 49.2488, longitude: -122.9805,
        createdAt: new Date(Date.now() - 25 * 3600000).toISOString()
    },
    {
        firstName: 'Joseph Nello', lastName: 'Conti',
        email: 'JConti@vikingfire.ca',
        company: 'Vikingfire',
        jobTitle: 'Representative',
        phone: '+1 (604) 324-7122', location: '—',
        source: 'OUTLOOK',
        latitude: 49.2270, longitude: -123.0032,
        createdAt: new Date(Date.now() - 26 * 3600000).toISOString()
    },
    // Additional contacts for map clusters
    {
        firstName: 'Sarah', lastName: 'Williams',
        email: 'sarah.williams@acme.com',
        company: 'Acme Corp',
        jobTitle: 'Engineer',
        phone: '+1 (415) 555-0101', location: 'San Francisco, CA',
        source: 'OUTLOOK',
        latitude: 37.7749, longitude: -122.4194,
        createdAt: new Date(Date.now() - 48 * 3600000).toISOString()
    },
    {
        firstName: 'Michael', lastName: 'Chen',
        email: 'm.chen@techcorp.com',
        company: 'TechCorp',
        jobTitle: 'VP Engineering',
        phone: '+1 (512) 555-0202', location: 'Austin, TX',
        source: 'OUTLOOK',
        latitude: 30.2672, longitude: -97.7431,
        createdAt: new Date(Date.now() - 72 * 3600000).toISOString()
    },
    {
        firstName: 'Emily', lastName: 'Rodriguez',
        email: 'e.rodriguez@buildco.com',
        company: 'BuildCo',
        jobTitle: 'Operations Manager',
        phone: '+1 (305) 555-0303', location: 'Miami, FL',
        source: 'OUTLOOK',
        latitude: 25.7617, longitude: -80.1918,
        createdAt: new Date(Date.now() - 96 * 3600000).toISOString()
    },
    {
        firstName: 'James', lastName: 'Thompson',
        email: 'j.thompson@pacific.ca',
        company: 'Pacific Developments',
        jobTitle: 'Site Manager',
        phone: '+1 (604) 555-0404', location: 'Vancouver, BC',
        source: 'OUTLOOK',
        latitude: 49.2827, longitude: -123.1207,
        createdAt: new Date(Date.now() - 120 * 3600000).toISOString()
    },
    {
        firstName: 'Lisa', lastName: 'Park',
        email: 'l.park@northbuild.ca',
        company: 'North Build Solutions',
        jobTitle: 'Estimator',
        phone: '+1 (604) 555-0505', location: 'Surrey, BC',
        source: 'OUTLOOK',
        latitude: 49.1913, longitude: -122.8490,
        createdAt: new Date(Date.now() - 144 * 3600000).toISOString()
    },
    {
        firstName: 'Robert', lastName: 'Singh',
        email: 'r.singh@westcoast.ca',
        company: 'West Coast Electric',
        jobTitle: 'Electrician',
        phone: '+1 (604) 555-0606', location: 'Burnaby, BC',
        source: 'OUTLOOK',
        latitude: 49.2488, longitude: -122.9805,
        createdAt: new Date(Date.now() - 168 * 3600000).toISOString()
    },
    {
        firstName: 'Amanda', lastName: 'Foster',
        email: 'a.foster@islandpaving.ca',
        company: 'Island Paving',
        jobTitle: 'Admin Manager',
        phone: '+1 (250) 555-0707', location: 'Nanaimo, BC',
        source: 'OUTLOOK',
        latitude: 49.1659, longitude: -123.9401,
        createdAt: new Date(Date.now() - 192 * 3600000).toISOString()
    },
    {
        firstName: 'Derek', lastName: 'Huang',
        email: 'd.huang@rapidconcrete.ca',
        company: 'Rapid Concrete',
        jobTitle: 'Foreman',
        phone: '+1 (604) 555-0808', location: 'Langley, BC',
        source: 'OUTLOOK',
        latitude: 49.1044, longitude: -122.6609,
        createdAt: new Date(Date.now() - 216 * 3600000).toISOString()
    },
    // More contacts to hit 61 total — bulk generated
    ...Array.from({ length: 41 }, (_, i) => ({
        firstName: ['Alex', 'Chris', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Drew', 'Blake', 'Quinn',
            'Avery', 'Cameron', 'Dakota', 'Emery', 'Finley', 'Harper', 'Hayden', 'Jamie', 'Jesse', 'Kelly',
            'Lane', 'Logan', 'Marley', 'Nico', 'Oakley', 'Parker', 'Peyton', 'Reese', 'Rowan', 'Sage',
            'Sawyer', 'Skyler', 'Spencer', 'Sydney', 'Tatum', 'Toby', 'Val', 'Wesley', 'Wren', 'Zion', 'Ash'][i],
        lastName: ['Brown', 'Davis', 'Garcia', 'Harris', 'Jackson', 'Jones', 'Lee', 'Martin', 'Miller', 'Moore',
            'Nelson', 'Patel', 'Reed', 'Roberts', 'Scott', 'Smith', 'Taylor', 'Thomas', 'Walker', 'White',
            'Wilson', 'Wright', 'Young', 'Adams', 'Allen', 'Baker', 'Carter', 'Clark', 'Collins', 'Cook',
            'Edwards', 'Evans', 'Green', 'Hall', 'Hill', 'King', 'Lewis', 'Long', 'Mitchell', 'Morris', 'Murphy'][i],
        email: `contact${i + 20}@company.com`,
        company: ['Bird', 'Bird', 'Bird', 'Bird', 'Bird', 'Ledcor', 'Ledcor', 'PCL', 'PCL', 'Graham',
            'EllisDon', 'Aecon', 'Chandos', 'Pomerleau', 'Whitewater', 'Peak', 'Summit', 'Vertex',
            'Cascade', 'Alpine', 'Horizon', 'Matrix', 'Pinnacle', 'Nova', 'Atlas', 'Forge', 'Keystone',
            'Sterling', 'Patriot', 'Vanguard', 'Titan', 'Apex', 'Nexus', 'Prism', 'Crown', 'Delta',
            'Echo', 'Falcon', 'Griffin', 'Harbor', 'Iron'][i],
        jobTitle: ['Project Manager', 'Project Manager', 'Project Manager', 'Estimator', 'Estimator',
            'Project Manager', 'Superintendent', 'Estimator', 'Project Manager', 'Project Manager',
            'Coordinator', 'Engineer', 'Designer', 'Foreman', 'Inspector', 'Planner', 'Analyst',
            'Director', 'Manager', 'Supervisor', 'Consultant', 'Advisor', 'Specialist', 'Lead',
            'Coordinator', 'Technician', 'Operator', 'Assistant', 'Associate', 'Senior PM',
            'VP Operations', 'Site Lead', 'QC Manager', 'Safety Officer', 'Scheduler', 'Procurement',
            'Contracts', 'BIM Lead', 'Surveyor', 'Drafter', 'Laborer'][i],
        phone: `+1 (${600 + i}) 555-${String(1000 + i).slice(-4)}`,
        location: '—',
        source: 'OUTLOOK',
        latitude: 49.2 + (Math.random() - 0.5) * 2,
        longitude: -123.1 + (Math.random() - 0.5) * 2,
        createdAt: new Date(Date.now() - (240 + i * 24) * 3600000).toISOString()
    }))
];

export function getTopCompany(): string {
    const freq: Record<string, number> = {};
    contacts.forEach(c => { freq[c.company] = (freq[c.company] || 0) + 1; });
    return Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
}

export function getTopRole(): string {
    const freq: Record<string, number> = {};
    contacts.forEach(c => {
        if (c.jobTitle && c.jobTitle !== '—') freq[c.jobTitle] = (freq[c.jobTitle] || 0) + 1;
    });
    return Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
}

export function getTimeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return 'just now';
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
}

export function getInitials(c: Contact): string {
    return ((c.firstName?.[0] || '') + (c.lastName?.[0] || '')).toUpperCase();
}

const AVATAR_COLORS = [
    '#4ade80', '#f472b6', '#60a5fa', '#fbbf24', '#a78bfa',
    '#34d399', '#fb923c', '#818cf8', '#f87171', '#2dd4bf'
];

export function getAvatarColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
