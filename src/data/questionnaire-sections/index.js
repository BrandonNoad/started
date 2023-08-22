import { LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from './constants';
import nonInstrumentalAssessmentAndScreening from './nonInstrumentalAssessmentAndScreening';
import participants from './participants';
import prom from './prom';
import treatment from './treatment';
import universallyApplicableQuestions from './universallyApplicableQuestions';
import fees from './instrumentation/fees';
import otherInstrumentation from './instrumentation/otherInstrumentation';
import vfss from './instrumentation/vfss';
import neuroimaging from './instrumentation/imaging-based-instrumentation/neuroimaging';
import ultrasound_ultrasonography from './instrumentation/imaging-based-instrumentation/ultrasound_ultrasonography';
import hrpm from './instrumentation/sensor-based-instrumentation/hrpm';
import inducedReflexiveCoughTesting_pneumotachograph from './instrumentation/sensor-based-instrumentation/inducedReflexiveCoughTesting_pneumotachograph';
import nasalCannulaAirflow_respiratoryInductancePlethysmography from './instrumentation/sensor-based-instrumentation/nasalCannulaAirflow_respiratoryInductancePlethysmography';
import peakCoughFlowMeter_spirometry from './instrumentation/sensor-based-instrumentation/peakCoughFlowMeter_spirometry';
import semg from './instrumentation/sensor-based-instrumentation/semg';
import tonguePressure from './instrumentation/sensor-based-instrumentation/tonguePressureTools';

export const labels = [
    {
        id: LABEL_ID_TRANSPARENCY,
        label: 'Transparency'
    },
    {
        id: LABEL_ID_RIGOR,
        label: 'Rigor'
    }
];

export default [
    { ...universallyApplicableQuestions, order: 1 },
    { ...participants, order: 2 },
    { ...nonInstrumentalAssessmentAndScreening, order: 3 },
    { ...vfss, order: 4 },
    { ...fees, order: 5 },
    { ...tonguePressure, order: 6 },
    { ...hrpm, order: 7 },
    { ...peakCoughFlowMeter_spirometry, order: 8 },
    { ...nasalCannulaAirflow_respiratoryInductancePlethysmography, order: 9 },
    { ...semg, order: 10 },
    { ...inducedReflexiveCoughTesting_pneumotachograph, order: 11 },
    { ...ultrasound_ultrasonography, order: 12 },
    { ...neuroimaging, order: 13 },
    { ...otherInstrumentation, order: 14 },
    { ...treatment, order: 15 },
    { ...prom, order: 16 }
];
