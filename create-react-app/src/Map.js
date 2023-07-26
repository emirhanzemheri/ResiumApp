
import { Cartesian3, Color, Ion } from "cesium";
import { Viewer, Entity } from "resium";



export default function Map() {

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ODEyNWM5Yi1hYjI1LTQyMjQtODgxOS0xYjVmNGJjNmVmZjAiLCJpZCI6MTU2NjU4LCJpYXQiOjE2OTAzOTI0MjF9.gkDMqQ-PG6L6VzM0hvxDtIdvUjMgjS_S3xLqvwfkYds";

  return (


  
    <Viewer >
      <Entity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 10, color: Color.WHITE }}
        description="hoge"
      />
    </Viewer>
  );
}
