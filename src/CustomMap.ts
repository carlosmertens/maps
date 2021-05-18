// "Instructions" to every other class on
// how to be an argument to 'addMarker' method
interface Pinpoint {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(pinpoint: Pinpoint): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pinpoint.location.lat,
        lng: pinpoint.location.lng,
      },
    });
  }
}
