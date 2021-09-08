import { LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from './constants';
import nonInstrumentalAssessmentAndScreening from './nonInstrumentalAssessmentAndScreening';
import participants from './participants';
import prom from './prom';
import treatment from './treatment';
import universallyApplicableQuestions from './universallyApplicableQuestions';
import fees from './instrumentation/fees';
import otherImagingBasedInstrumentation from './instrumentation/otherImagingBasedInstrumentation';
import otherInstrumentation from './instrumentation/otherInstrumentation';
import otherSensorBasedInstrumentation from './instrumentation/otherSensorBasedInstrumentation';
import vfss from './instrumentation/vfss';
import computedTomography_320RowAreaDetectorScan from './instrumentation/imaging-based-instrumentation/computedTomography_320RowAreaDetectorScan';
import neuroimaging from './instrumentation/imaging-based-instrumentation/neuroimaging';
import scintigraphy from './instrumentation/imaging-based-instrumentation/scintigraphy';
import ultrasound_ultrasonography from './instrumentation/imaging-based-instrumentation/ultrasound_ultrasonography';
import hrpm from './instrumentation/sensor-based-instrumentation/hrpm';
import inducedReflexiveCoughTesting_pneumotachograph from './instrumentation/sensor-based-instrumentation/inducedReflexiveCoughTesting_pneumotachograph';
import nasalCannulaAirflow_respiratoryInductancePlethysmography from './instrumentation/sensor-based-instrumentation/nasalCannulaAirflow_respiratoryInductancePlethysmography';
import peakCoughFlowMeter_spirometry from './instrumentation/sensor-based-instrumentation/peakCoughFlowMeter_spirometry';
import semg from './instrumentation/sensor-based-instrumentation/semg';
import tonguePressureTools from './instrumentation/sensor-based-instrumentation/tonguePressureTools';

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
    { ...nonInstrumentalAssessmentAndScreening, order: 4 },
    { ...participants, order: 1 },
    { ...prom, order: 20 },
    { ...treatment, order: 3 },
    { ...universallyApplicableQuestions, order: 2 },
    { ...fees, order: 6 },
    { ...otherImagingBasedInstrumentation, order: 18 },
    { ...otherInstrumentation, order: 19 },
    { ...otherSensorBasedInstrumentation, order: 17 },
    { ...vfss, order: 5 },
    { ...computedTomography_320RowAreaDetectorScan, order: 15 },
    { ...neuroimaging, order: 16 },
    { ...scintigraphy, order: 13 },
    { ...ultrasound_ultrasonography, order: 14 },
    { ...hrpm, order: 8 },
    { ...inducedReflexiveCoughTesting_pneumotachograph, order: 12 },
    { ...nasalCannulaAirflow_respiratoryInductancePlethysmography, order: 10 },
    { ...peakCoughFlowMeter_spirometry, order: 9 },
    { ...semg, order: 11 },
    { ...tonguePressureTools, order: 7 }
];
