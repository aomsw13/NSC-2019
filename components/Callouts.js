import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MapView, {
  Marker,
  Callout,
  CalloutSubview,
  ProviderPropType,
} from 'react-native-maps';
import CustomCallout from './CustomCallout';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 13.7946;
const LONGITUDE = 100.3234;
const LATITUDE_DELTA = 0.02122;//0.0922;
const LONGITUDE_DELTA = 0.005;//LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class Callouts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cnt: 0,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
        {
          coordinate: { //Engineer faculty
            latitude: 13.796595,//LATITUDE + SPACE,
            longitude: 100.325838,//LONGITUDE + SPACE,
          },
        },
        {
          coordinate: { //President office
            latitude: 13.794418,//LATITUDE + SPACE,
            longitude: 100.325673,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //library
            latitude: 13.795159,//LATITUDE,
            longitude: 100.324543,//LONGITUDE,
          },
        },
        {
          coordinate: { // Faculty of science 3-4
            latitude: 13.792000,//LATITUDE,
            longitude: 100.322178,//LONGITUDE - SPACE / 2,
          },
        },
        {
          coordinate: { //Faculty of Music
            latitude: 13.788241,//LATITUDE + SPACE,
            longitude: 100.324182,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Artist's house
            latitude: 13.789790,//LATITUDE + SPACE,
            longitude: 100.322673,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Princ Mahidol Parking
            latitude: 13.791084,//LATITUDE + SPACE,
            longitude: 100.322504,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Parking2 (line2) opposite musc
            latitude: 13.791846,//LATITUDE + SPACE,
            longitude: 100.321887,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Faculty of science 1-2
            latitude: 13.792011,//LATITUDE + SPACE,
            longitude: 100.323340,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Institue of Language
            latitude: 13.791816,//LATITUDE + SPACE,
            longitude: 100.323508,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Faculty of social science
            latitude: 13.792008,//LATITUDE + SPACE,
            longitude: 100.324532,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Thai House
            latitude: 13.791817,//LATITUDE + SPACE,
            longitude: 100.324886,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //ASEAN Institue for Health
            latitude: 13.791827,//LATITUDE + SPACE,
            longitude: 100.326389,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Nurse
            latitude: 13.788907,//LATITUDE + SPACE,
            longitude: 100.325468,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //International College
            latitude: 13.791998,//LATITUDE + SPACE,
            longitude: 100.326795,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Faculty of Engineer Gate4
            latitude: 13.796215,//LATITUDE + SPACE,
            longitude: 100.326490,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Institue of Molecular Bio.
            latitude: 13.796745,//LATITUDE + SPACE,
            longitude: 100.326207,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Faculty of Environment and Resource
            latitude: 13.795415,//LATITUDE + SPACE,
            longitude: 100.322842,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //College of Sport & Science
            latitude: 13.796576,//LATITUDE + SPACE,
            longitude: 100.321502,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //faculty of liberal arts 
            latitude: 13.796742,//LATITUDE + SPACE,
            longitude: 100.320943,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //ลานเอนกประสงค์  Spot building
            latitude: 13.796570,//LATITUDE + SPACE,
            longitude: 100.319620,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Petanque field ลานเปตอง
            latitude: 13.796753,//LATITUDE + SPACE,
            longitude: 100.319516,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Tram station
            latitude: 13.794741,//LATITUDE + SPACE,
            longitude: 100.318804,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Dorm 8-9
            latitude: 13.792204,//LATITUDE + SPACE,
            longitude: 100.319563,//LONGITUDE - SPACE,
          },
        },
        {
          coordinate: { //Siri Rukkhachati
            latitude: 13.791838,//LATITUDE + SPACE,
            longitude: 100.319780,//LONGITUDE - SPACE,
          },
        }
      ],
    };
  }

  show() {
    this.marker1.showCallout();
  }

  hide() {
    this.marker1.hideCallout();
  }

  _onPressButton() {
    alert('You tapped the button!')
  }


  render() {
    const { region, markers } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={region}
          zoomTapEnabled={false}
        >
          <Marker
            ref={ref => {
              this.marker1 = ref;
            }}
            coordinate={markers[0].coordinate}
            title="Faculty of Engineer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          />
          {/* <Marker coordinate={markers[1].coordinate}>
            <Callout style={styles.plainView}>
              <View>
                <Text>This is a plain view</Text>
              </View>
            </Callout>
          </Marker> */}
          <Marker
            ref={ref => {
              this.marker2 = ref;
            }}
            coordinate={markers[1].coordinate}
            title="President Office"
            //description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          />
          <Marker
            coordinate={markers[2].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
            ref={ref => {
              this.marker2 = ref;
            }}
          >
            <Callout
              alphaHitTest
              tooltip
              onPress={e => {
                if (
                  e.nativeEvent.action === 'marker-inside-overlay-press' ||
                  e.nativeEvent.action === 'callout-inside-press'
                ) {
                  return;
                }

                Alert.alert('callout pressed');
              }}
              style={styles.customView}
            >
              <CustomCallout>
                <Text>{`Library${
                  this.state.cnt
                }`}</Text>
                <CalloutSubview
                  onPress={() => {
                    this.setState({ cnt: this.state.cnt + 1 }, () => {
                      this.marker2.redrawCallout();
                    });
                  }} // onPress={this._onPressButton}
                  style={[styles.calloutButton]}
                >
                  <Text>Click me</Text>
                </CalloutSubview>
              </CustomCallout>
            </Callout>
          </Marker>
          <Marker
            ref={ref => {
              this.marker4 = ref;
            }}
            coordinate={markers[3].coordinate}
            title="Faculty of Science 3-4"
            //description="by pressing on transparent area of custom callout"
          />
           <Marker
            ref={ref => {
              this.marker5 = ref;
            }}
            coordinate={markers[4].coordinate}
            title="College of Music"
          />
           <Marker
            ref={ref => {
              this.marker6 = ref;
            }}
            coordinate={markers[5].coordinate}
            title="เรือนศิลปิน"
          />
           <Marker
            ref={ref => {
              this.marker7 = ref;
            }}
            coordinate={markers[6].coordinate}
            title="Prince Mahidol Hall Parking (Line3)"
          />
          <Marker
            ref={ref => {
              this.marker8 = ref;
            }}
            coordinate={markers[7].coordinate}
            title="Prince Mahidol Hall Parking (Line2)"
          />
          <Marker
            ref={ref => {
              this.marker9 = ref;
            }}
            coordinate={markers[8].coordinate}
            title="Faculty of science 1-2"
          />
          <Marker
            ref={ref => {
              this.marker10 = ref;
            }}
            coordinate={markers[9].coordinate}
            title="Institue of Language"
          />
          <Marker
            ref={ref => {
              this.marker11 = ref;
            }}
            coordinate={markers[10].coordinate}
            title="Faculty of Social Science"
          />
           <Marker
            ref={ref => {
              this.marker12 = ref;
            }}
            coordinate={markers[11].coordinate}
            title="Thai House"
          />
           <Marker
            ref={ref => {
              this.marker13 = ref;
            }}
            coordinate={markers[12].coordinate}
            title="ASEAN Institute for Health"
          />
          <Marker
            ref={ref => {
              this.marker14 = ref;
            }}
            coordinate={markers[13].coordinate}
            title="Nurse"
          />
           <Marker
            ref={ref => {
              this.marker15 = ref;
            }}
            coordinate={markers[14].coordinate}
            title="International College"
          />
          <Marker
            ref={ref => {
              this.marker16 = ref;
            }}
            coordinate={markers[15].coordinate}
            title="Faculty of Engineer Gate4"
          />
           <Marker
            ref={ref => {
              this.marker17 = ref;
            }}
            coordinate={markers[16].coordinate}
            title="Institute of Molecular Bio."
          />
          <Marker
          ref={ref => {
            this.marker18 = ref;
          }}
          coordinate={markers[17].coordinate}
          title="Faculty of Environment and Resource"
        />
         <Marker
          ref={ref => {
            this.marker19 = ref;
          }}
          coordinate={markers[18].coordinate}
          title="College of Sport and Science"
        />
         <Marker
          ref={ref => {
            this.marker20 = ref;
          }}
          coordinate={markers[19].coordinate}
          title="faculty of liberal arts"
        />
         <Marker
          ref={ref => {
            this.marker21 = ref;
          }}
          coordinate={markers[20].coordinate}
          title="Spot building"
        />
         <Marker
          ref={ref => {
            this.marker22 = ref;
          }}
          coordinate={markers[21].coordinate}
          title="Patanque field"
        />
         <Marker
          ref={ref => {
            this.marker23 = ref;
          }}
          coordinate={markers[22].coordinate}
          title="tram Station"
        />
         <Marker
          ref={ref => {
            this.marker24 = ref;
          }}
          coordinate={markers[23].coordinate}
          title="Dorm 8-9"
        />
         <Marker
          ref={ref => {
            this.marker25 = ref;
          }}
          coordinate={markers[24].coordinate}
          title="Siri RukkhaChati Nature Park"
        />
        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Tap on markers to see different callouts</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.show()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Show</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.hide()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Hide</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Callouts.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  customView: {
    width: 140,
    height: 140,
  },
  plainView: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  calloutButton: {
    width: 'auto',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default Callouts;