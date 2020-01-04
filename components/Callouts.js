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
const LATITUDE_DELTA = 0.009;//0.0922;
const LONGITUDE_DELTA = 0.01//LATITUDE_DELTA * ASPECT_RATIO;
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
            latitude: 13.796242,//LATITUDE + SPACE,
            longitude: 100.325214,//LONGITUDE + SPACE,
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
            latitude: 13.794508,//LATITUDE,
            longitude: 100.324110,//LONGITUDE,
          },
        },
        {
          coordinate: { // Faculty of science
            latitude: 13.792455,//LATITUDE,
            longitude: 100.322639,//LONGITUDE - SPACE / 2,
          },
        },
        {
          coordinate: { //Faculty of Music
            latitude: 13.788241,//LATITUDE + SPACE,
            longitude: 100.324182,//LONGITUDE - SPACE,
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
                <Text>{`This is a custom callout bubble view ${
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
            title="Faculty of Science"
            //description="by pressing on transparent area of custom callout"
          />
           <Marker
            ref={ref => {
              this.marker5 = ref;
            }}
            coordinate={markers[4].coordinate}
            title="College of Music"
            //description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
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