import {
    QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION,
    title: 'Other Imaging-Based Instrumentation',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Were the following aspects of any stimuli and/or contrast material utilized described (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Dose',
                        'Type ',
                        'Brand or manufacturer',
                        'No stimuli and/or contrast material was utilized'
                    ]
                },
                {
                    question: 'Was a neuroimaging procedure used in the study?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No']
                },
                {
                    question: 'Were Regions of Interest (ROIs) localized and identified?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the definitions of ROIs described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        }
                    ]
                },
                {
                    question: 'Were anatomic references/markers used to compare results?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No']
                }
            ]
        },
        {
            questions: [
                {
                    question:
                        'Select the types of imaging-based instrumentation used in the study:',
                    labels: [],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Scintigraphy',
                        'Ultrasound/Ultrasonography',
                        'Computed tomography/320 row area detector scan',
                        'Neuroimaging (MRI, fMRI, MEG)',
                        'Other (not listed)'
                    ],
                    questionGroups: [
                        {
                            filter: 0,
                            // heading: 'Scintigraphy',
                            questions: [
                                {
                                    question: 'Was a marker used?',
                                    labels: [],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Were its details and placement reported?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question: 'Was frame rate reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was duration of the recording reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Were the dose and radioactive liquid ingested reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'If Time-Activity curves were used, were they reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No', 'N/A']
                                }
                            ]
                        },
                        {
                            filter: 1,
                            // heading: 'Ultrasound / Ultrasonography',
                            questions: [
                                {
                                    question: 'Was a transducer used?',
                                    labels: [],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Were details regarding placement and calibration described?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question:
                                        'Were the following aspects of lubrication described (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: [
                                        'Type (e.g., water-based, petroleum-based, etc.)',
                                        'Concentration',
                                        'Quantity',
                                        'Application process',
                                        'No lubrication or nasal decongestant were utilized'
                                    ]
                                },
                                {
                                    question:
                                        'Were the following aspects of measurement reported (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: ['Signal frequencies', 'Sampling rate']
                                },
                                {
                                    question:
                                        'Was the resolution of the ultrasound/Ultrasonography reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Was the ultrasound mode (B-mode or T-mode) reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was the position of the scan line reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was the data collected vs data analyzed reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was the frame rate reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                }
                            ]
                        },
                        {
                            filter: 2,
                            // heading: 'Computed Tomography / 320-Row Area Detector Scan',
                            questions: [
                                {
                                    question:
                                        'Were the following aspects of the scanning protocol described (select all that apply)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    isMultipleResponsesAllowed: true,
                                    responseOptions: [
                                        'Intervals of images in seconds',
                                        'Structures measured',
                                        'Scanning parameters',
                                        'Tube voltages/current',
                                        'Scanning range',
                                        'Dose absorbed at the skin surface',
                                        'Effective dose, dosimeter and location',
                                        'Moment when the scan started',
                                        'Duration of the scanning'
                                    ]
                                }
                            ]
                        },
                        {
                            filter: 3,
                            // heading: 'Neuroimaging (MRI, fMRI, MEG)',
                            questions: [
                                {
                                    question: 'Was the participant’s handedness reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Were the number of neuroimaging sessions reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was the duration of the tasks reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Were the number of events collected reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Was the methodology to localize/determine the brain areas and ROI described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Was a training session to familiarize participants with the neuroimage procedures used?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Were the details regarding the training session described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Were off-line tasks used and reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Were real-line tasks used and reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Was the type of scan performed reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Were functional images collected?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the methodology to acquire functional images described?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question: 'Was the number of slices reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question: 'Were magnetic fields collected?',
                                    labels: [],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the methodology to record magnetic fields described?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question:
                                        'Was the methodology to determine activation clusters described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Was the type of atlas used reported (Tournoux, Talairach, etc)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the methodology to determine the atlas described?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No']
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    question: 'Was scan resolution and size of voxels reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Was the event used to compare the fMRI results reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No']
                                },
                                {
                                    question:
                                        'Were the model, type, and channels used in the head coil/helmet reported?',
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
};
