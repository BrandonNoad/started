import { LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from '../constants';

// The keys in this object (a, b, c, etc.) do not mean anything. They are simply labels used to
// reference the questions from multiple sections.
export default {
    a: {
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
    c: {
        question: 'Were operational definitions for measurements/outcomes reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    d: {
        question:
            'Were the details of the equipment reported including model and recording system?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    e: {
        question: 'Were the names and system requirements of any analysis software described?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    f: {
        question: 'Were the methods for calibration of all instrumentation described? ',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    g: {
        sharedId: 'g',
        question: 'Was more than one rater included?',
        labels: [LABEL_ID_RIGOR],
        responseOptions: ['Yes', 'No', 'N/A'],
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
        question:
            'Was the process of rating described relative to time of exam (i.e, real-time and/or post-hoc)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        question: 'Were exams recorded and reviewed post-hoc?',
                        labels: [LABEL_ID_RIGOR],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    k: {
        question: 'Was barium or contrast material used?',
        labels: [],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        question:
                            'Were details regarding name/brand/type of barium (or other contrast) reported?',
                        labels: [LABEL_ID_TRANSPARENCY],
                        responseOptions: ['Yes', 'No']
                    },
                    {
                        question:
                            'Were details regarding barium (or other contrast) concentration reported?',
                        labels: [LABEL_ID_TRANSPARENCY],
                        responseOptions: ['Yes', 'No']
                    },
                    {
                        question: 'Was the same concentration of barium used across trials?',
                        labels: [LABEL_ID_RIGOR],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    l: {
        question:
            'Was the timing of ratings reported (e.g., at the time of evaluation versus after the evaluation)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
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
        question: 'Were standard rating methods used and identified (e.g. MBSImP, DIGEST, ASPEKT)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    n: {
        question:
            'If a non-validated scale was utilized, were procedures described for reproducibility?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    o: {
        question:
            'Was application of residue rating scale described in a reproducible manner (i.e., bolus level, swallow level, region, etc.)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    p: {
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
        question:
            'Were the placement and orientation of the device, sensor(s), and/or catheter described?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    s: {
        question: 'Were operational definitions stated for every measurement that was recorded?',
        labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    t: {
        question: 'Were all units of measurement reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    u: {
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
        question:
            'Was the method for processing data for post-collection analysis described (e.g., normalizing, standardizing, signal processing, converting, modifying data, etc.)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No', 'N/A']
    },
    w: {
        question:
            'Was there reporting of measurement artifact (e.g. non-task-related movement/data)?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        question:
                            'Was the method for handling artifact described (e.g. inspection and removal prior to data analysis?',
                        labels: [],
                        responseOptions: ['Yes', 'No', 'N/A']
                    }
                ]
            }
        ]
    },
    x: {
        question: 'Were the following aspects of measurement reported (select all that apply)?',
        labels: [LABEL_ID_TRANSPARENCY],
        isMultipleResponsesAllowed: true,
        responseOptions: ['Signal frequencies', 'Sampling rate']
    },
    y: {
        question: 'Was the presence or absence of any adverse events reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    z: {
        question: 'Was a marker used?',
        labels: [],
        responseOptions: ['Yes', 'No'],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        question: 'Were its details and placement reported?',
                        labels: [LABEL_ID_TRANSPARENCY],
                        responseOptions: ['Yes', 'No']
                    }
                ]
            }
        ]
    },
    aa: {
        question: 'Was frame rate reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    ab: {
        question: 'Was duration of the recording reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    ac: {
        question: 'Were the dose and radioactive liquid ingested reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    ad: {
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
        question: 'Was the resolution of the ultrasound/ultrasonography reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    },
    af: {
        question: 'Was the data collected vs data analyzed reported?',
        labels: [LABEL_ID_TRANSPARENCY],
        responseOptions: ['Yes', 'No']
    }
};
