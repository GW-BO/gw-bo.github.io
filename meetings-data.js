// GW-BO Meetings Data Structure
// Use this file to easily add new meetings

const meetingsData = [
    // Template for adding new meetings:
    // {
    //     date: "DD Month YYYY",
    //     speaker: "Full Name",
    //     affiliation: "Institution/Organization",
    //     title: "Meeting title/topic",
    //     meetingLink: "https://meet.google.com/xxx-xxxx-xxx", // Optional
    //     papers: [
    //         {
    //             title: "Paper title",
    //             url: "https://paper-url.com"
    //         }
    //     ]
    // },

        {
        date: "24 November 2025",
        speaker: "Lucia Papalini",
        affiliation: "University of Pisa",
        title: "Overlapping Gravitational-Wave Signals in 3G Detectors: Transformers and Normalizing Flows for joint inference",
        papers: [
            {
                title: "Can Transformers help us perform parameter estimation of overlapping signals in gravitational wave detectors?",
                url: "https://iopscience.iop.org/article/10.1088/1361-6382/adfd33"
            },
            {
                title: "Deep learning to detect GWs from binary close encounters: Fast parameter estimation using normalizing flows",
                url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.109.102004"
            }
        ]
    },
    {
        date: "31 March 2025",
        speaker: "Vasco Gennari",
        affiliation: "L2IT Toulouse",
        title: "How are binary black holes distributed?",
        papers: [
            {
                title: "Searching for additional structure and redshift evolution in the observed binary black hole population [...]",
                url: "https://ui.adsabs.harvard.edu/abs/2025arXiv250220445G/abstract"
            },
            {
                title: "Population of Merging Compact Binaries Inferred Using Gravitational Waves through GWTC-3",
                url: "https://ui.adsabs.harvard.edu/abs/2023PhRvX..13a1048A/abstract"
            }
        ]
    },
    {
        date: "17 February 2025",
        speaker: "Filippo Santoliquido",
        affiliation: "GSSI",
        title: "Binary Black Holes mergers from Population III stars",
        papers: [
            {
                title: "Classifying binary black holes from Pop III stars with the Einstein Telescope: A machine-learning approach",
                url: "https://ui.adsabs.harvard.edu/abs/2024A%26A...690A.362S/abstract"
            },
            {
                title: "Binary black hole mergers from population III stars: uncertainties from star formation and binary star properties",
                url: "https://ui.adsabs.harvard.edu/abs/2023MNRAS.524..307S/abstract"
            }
        ]
    },
    {
        date: "3 June 2024",
        speaker: "Giovanni Mazzolari",
        affiliation: "INAF OAS - Bologna",
        title: "Cosmological rates of Extreme mass ratio inspirals",
        papers: [
            {
                title: "EMRIs triggered by massive black hole binaries: from relativistic dynamics to cosmological rates",
                url: "https://ui.adsabs.harvard.edu/abs/2022MNRAS.516.1959M/abstract"
            }
        ]
    },
    {
        date: "20 May 2024",
        speaker: "Mario Cadelano",
        affiliation: "University of Bologna",
        title: "Searching for exotic compact binaries and GW precursors in star clusters",
        papers: [
            {
                title: "A pulsar in a binary with a compact object in the mass gap between neutron stars and black holes",
                url: "https://ui.adsabs.harvard.edu/abs/2024Sci...383..275B/abstract"
            },
            {
                title: "A new test of general relativity - Gravitational radiation and the binary pulsar PSR 1913+16",
                url: "https://ui.adsabs.harvard.edu/abs/1982ApJ...253..908T/abstract"
            }
        ]
    },
    {
        date: "6 May 2024",
        speaker: "Stefano Torniamenti",
        affiliation: "University of Heidelberg",
        title: "Binary black hole mergers in dense star clusters",
        papers: [
            {
                title: "Compact Binary Coalescences: Astrophysical Processes and Lessons Learned",
                url: "https://ui.adsabs.harvard.edu/abs/2022Galax..10...76S/abstract"
            },
            {
                title: "Hierarchical mergers of stellar-mass black holes and their gravitational-wave signatures",
                url: "https://ui.adsabs.harvard.edu/abs/2021NatAs...5..749G/abstract"
            },
            {
                title: "Hierarchical binary black hole mergers in globular clusters: mass function and evolution with redshift",
                url: "https://ui.adsabs.harvard.edu/abs/2024arXiv240114837T/abstract"
            }
        ]
    },
    {
        date: "8 April 2024",
        speaker: "Giulia Stratta, Eliana Palazzi",
        affiliation: "INAF OAS - Bologna",
        title: "GW source electromagnetic counterparts: follow-up activities",
        papers: [
            {
                title: "GRAWITA: VLT Survey Telescope observations of the gravitational wave sources GW150914 and GW151226",
                url: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.474..411B/abstract"
            }
        ]
    },
    {
        date: "25 March 2024",
        speaker: "Matteo Tagliazucchi",
        affiliation: "University of Bologna",
        title: "Gravitational Wave 101 - Main discoveries and current catalogs",
        papers: [
            {
                title: "Observation of Gravitational Waves from a Binary Black Hole Merger",
                url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.061102"
            },
            {
                title: "Gravitational Waves and Gamma-Rays from a Binary Neutron Star Merger: GW170817 and GRB 170817A",
                url: "https://iopscience.iop.org/article/10.3847/2041-8213/aa920c"
            },
            {
                title: "GWTC-3: Compact Binary Coalescences Observed by LIGO and Virgo during the O3b",
                url: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.13.041039"
            }
        ]
    },
    {
        date: "11 March 2024",
        speaker: "Nicola Borghi",
        affiliation: "University of Bologna",
        title: "Organizational meeting: schedule, format, topics, and organizers",
        papers: [],
    }
];

// Function to add a new meeting (call this function with meeting data)
// Example usage:
// addNewMeeting({
//     date: "15 April 2025",
//     speaker: "John Doe",
//     affiliation: "MIT",
//     title: "New discoveries in gravitational waves",
//     meetingLink: "https://meet.google.com/xxx-xxxx-xxx",
//     papers: [
//         {
//             title: "A breakthrough in GW detection",
//             url: "https://example.com/paper"
//         }
//     ]
// });

function addNewMeeting(meetingData) {
    // Add to the beginning of the array (most recent first)
    meetingsData.unshift(meetingData);
    
    // Refresh the meetings display
    if (typeof loadMeetingsFromData === 'function') {
        loadMeetingsFromData();
    } else {
        console.log('Meeting added to data. Reload page to see changes.');
    }
}