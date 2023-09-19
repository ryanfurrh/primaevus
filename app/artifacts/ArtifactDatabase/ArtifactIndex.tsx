export const ArtifactIndex: {
  name: string;
  file: string;
  scale: number;
  position?: number[];
  rotation?: number[];
  margin?: number;
  date: string;
  use: string;
}[] = [
  {
    name: "Artifact A",
    file: "models/personal_computer/scene2.gltf",
    scale: 3.5,
    rotation: [0.2, 0.2, 0.5],
    date: "2023/05/15",
    use: "Proximum proficere consentit Mario emergant mares eandem cruciatus Rome clarus. Exoriens dispersa interlunio decidant Scipionibus.  Proximum proficere consentit Mario emergant mares eandem cruciatus Rome clarus. Exoriens dispersa interlunio decidant Scipionibus. Proximum proficere consentit Mario emergant mares eandem cruciatus Rome clarus. Exoriens dispersa interlunio decidant Scipionibus.",
  },

  {
    name: "Visor",
    file: "models/visor/visor.gltf",
    scale: 1,
    position: [0, 0.3, 0],
    margin: 1,
    date: "2020/03/27",
    use: "Aides in harnassing the power of Flux energy.",
  },

  {
    name: "Artifact B",
    file: "models/cell-amplifiers-3g/scene.gltf",
    scale: 2,
    date: "2023/05/15",
    use: "Civilia caelestium inclusa.  Turbinis locris docuere Dionysio molibus dependentes crinem.  Lapides vel molis.  Exspuitur ipsos ventus scandere longissima.",
  },

  {
    name: "Artifact C",
    file: "models/satellitedish/satellitedish.gltf",
    scale: 2.5,
    date: "2023/05/15",
    use: "Inclusa litus altitudinum subsolanus lumen stationes.  Invalida Porcio apsides admixtis.  Derasidas totus duas mutata.  Septentrio subiacet transgressis. ",
  },
];
