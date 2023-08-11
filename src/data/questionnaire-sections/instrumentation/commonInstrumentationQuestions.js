import { LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from '../constants';

// The keys in this object (a, b, c, etc.) do not mean anything. They are simply labels used to
// reference the questions from multiple sections.
export default {
    a: {
        sharedId: 'a',
        question:
            'Were the following aspects of instrumentation-related positioning reported (select all that apply)?',
        labels: [LABEL_ID_TRANSPARENCY],
        isMultipleResponsesAllowed: true,
        responseOptions: [
            'Structures of interest (e.g., lips, tongue, larynx, cervical esophagus, etc.)',
            'Angles/Views (e.g., lateral, sagittal, etc.)',
            'Method/accessories to optimize positioning (e.g., wedge, pillow, etc.) or measures (e.g., nose plugs)',
            'None of the above options were reported'
        ]
    },
    b: {
        sharedId: 'b',
        question:
            'If the participant was able to visualize their physiology during utilization of instrumentation, was this reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    c: {
        sharedId: 'c',
        question: 'Were operational definitions for measurements/outcomes reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    d: {
        sharedId: 'd',
        question:
            'Was equipment described in a way that can be reproduced including all testing and archiving equipment used with manufacturer specifications?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    e: {
        sharedId: 'e',
        question: 'Were the names and system requirements of any analysis software described?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    f: {
        sharedId: 'f',
        question: 'Were the methods for calibration of all instrumentation described? ',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    g: {
        sharedId: 'g',
        question: 'Was more than one rater included?',
        labels: [LABEL_ID_RIGOR],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        sharedId: 'g-0-0',
                        question: 'Was inter-rater reliability reported?',
                        labels: [LABEL_ID_TRANSPARENCY],
                        responseOptions: ['Yes', 'No'],
                        questionGroups: [
                            {
                                filter: 0,
                                questions: [
                                    {
                                        sharedId: 'g-0-0-0-0',
                                        question:
                                            'Was the method for determining inter-rater reliability reported?',
                                        labels: [LABEL_ID_TRANSPARENCY],
                                        responseOptions: ['Yes', 'No']
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    h: {
        sharedId: 'h',
        question: 'Was intra-rater reliability reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        sharedId: 'h-0-0',
                        question:
                            'Was the method for determining intra-rater reliability reported?',
                        labels: [LABEL_ID_TRANSPARENCY],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    i: {
        sharedId: 'i',
        question: 'Were discrepancy resolution processes described?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    j: {
        sharedId: 'j',
        question:
            'Was the process of rating described relative to time of exam (i.e, real-time and/or post-hoc)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        sharedId: 'j-0-0',
                        question: 'Were exams recorded and reviewed post-hoc?',
                        labels: [LABEL_ID_RIGOR],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    k: {
        sharedId: 'k',
        question: 'Was barium or contrast material used?',
        labels: [],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        sharedId: 'k-0-0',
                        question:
                            'Were details regarding name/brand/type of barium (or other contrast) reported?',
                        labels: [LABEL_ID_TRANSPARENCY],
                        responseOptions: ['Yes', 'No']
                    },
                    {
                        sharedId: 'k-0-1',
                        question:
                            'Were details regarding barium (or other contrast) concentration reported?',
                        labels: [LABEL_ID_TRANSPARENCY],
                        responseOptions: ['Yes', 'No']
                    },
                    {
                        sharedId: 'k-0-2',
                        question: 'Was the same concentration of barium used across trials?',
                        labels: [LABEL_ID_RIGOR],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    l: {
        sharedId: 'l',
        question:
            'Was the timing of ratings reported (e.g., at the time of evaluation versus after the evaluation)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        sharedId: 'l-0-0',
                        question:
                            'Were ratings of the recorded signals made at the time of evaluation or after the evaluation?',
                        labels: [LABEL_ID_RIGOR],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    m: {
        sharedId: 'm',
        question:
            'Were the tool(s)/method/standard protocol used reported (i.e. MBSImP, ASPEKT, DIGEST)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    n: {
        sharedId: 'n',
        question:
            'If a non-validated scale was utilized, were procedures described for reproducibility?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    o: {
        sharedId: 'o',
        question:
            'Was application of residue rating scale described in a reproducible manner (i.e., bolus level, swallow level, region, etc.)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    p: {
        sharedId: 'p',
        question:
            'Were the following aspects of lubrication and/or nasal decongestant described (select all that apply)?',
        labels: [LABEL_ID_TRANSPARENCY],
        isMultipleResponsesAllowed: true,
        responseOptions: [
            'Type (e.g., water-based, petroleum-based, etc.)',
            'Brand or Manufacturer',
            'Concentration',
            'Quantity',
            'Application process',
            'No lubrication or nasal decongestant were utilized.'
        ]
    },
    q: {
        sharedId: 'q',
        question:
            'Were the following aspects of topical anesthetic described (select all that apply)?',
        labels: [LABEL_ID_TRANSPARENCY],
        isMultipleResponsesAllowed: true,
        responseOptions: [
            'Type (e.g., water-based, petroleum-based, etc.)',
            'Brand or Manufacturer',
            'Concentration',
            'Quantity',
            'Application process',
            'No topical anesthetic was utilized.'
        ]
    },
    r: {
        sharedId: 'r',
        question:
            'Was the placement and orientation of the device, sensor(s), and/or catheter described?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    s: {
        sharedId: 's',
        question: 'Were operational definitions stated for every measurement that was recorded?',
        labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
        responseOptions: ['Yes', 'No']
    },
    t: {
        sharedId: 't',
        question: 'Were all units of measurement reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    u: {
        sharedId: 'u',
        question: 'Was the following task-specific information reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        isMultipleResponsesAllowed: true,
        responseOptions: [
            'Type of task(s) performed (e.g., dry swallows, effortful swallows, tongue-to-palate presses, etc.)',
            'Number of trials',
            'Rest between trials',
            'Duration of session',
            'Number of sessions',
            'Audio/visual recording during task ',
            'Placement of device, sensor and/or catheter'
        ]
    },
    v: {
        sharedId: 'v',
        question:
            'Was the method for processing data for post-collection analysis described (e.g., normalizing, standardizing, signal processing, converting, modifying data, etc.)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    w: {
        sharedId: 'w',
        question:
            'Was there reporting of measurement artifact (e.g. non-task-related movement/data)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        sharedId: 'w-0-0',
                        question:
                            'Was the method for handling artifact described (e.g. inspection and removal prior to data analysis?',
                        labels: [],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    x: {
        sharedId: 'x',
        question: 'Were the following aspects of measurement reported (select all that apply)?',
        labels: [LABEL_ID_TRANSPARENCY],
        isMultipleResponsesAllowed: true,
        responseOptions: ['Signal frequencies', 'Sampling rate']
    },
    y: {
        sharedId: 'y',
        question: 'Was the presence or absence of any adverse events reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    z: {
        sharedId: 'z',
        question: 'Was a marker used?',
        labels: [],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        sharedId: 'z-0-0',
                        question: 'Were its details and placement reported?',
                        labels: [LABEL_ID_TRANSPARENCY],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    aa: {
        sharedId: 'aa',
        question: 'Was frame rate reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    ab: {
        sharedId: 'ab',
        question: 'Was duration of the recording reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    ac: {
        sharedId: 'ac',
        question: 'Were the dose and radioactive liquid ingested reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    ad: {
        sharedId: 'ad',
        question: 'Were the following aspects of measurement reported (select all that apply)?',
        labels: [LABEL_ID_TRANSPARENCY],
        isMultipleResponsesAllowed: true,
        responseOptions: [
            'Signal frequencies',
            'Sampling rate',
            'Transducer orientation (sagittal or coronal)',
            'Use of water or gel pad between the transducer and skin',
            'Head stabilization'
        ]
    },
    ae: {
        sharedId: 'ae',
        question: 'Was the resolution of the ultrasound/Ultrasonography reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    af: {
        sharedId: 'af',
        question: 'Was the data collected vs data analyzed reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    }
};
