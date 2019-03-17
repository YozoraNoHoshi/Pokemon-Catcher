import React, { PureComponent } from 'react';
import Flex from '../../atoms/Flex';

class HowItWorks extends PureComponent {
  render() {
    return (
      <Flex column alCenter cWidth={this.props.cWidth}>
        <p>
          This is the Pal Park, a public Pokemon catching adventure! Inside the
          park you will find a variety of Pokemon from the Kanto, Johto, Hoenn,
          and Sinnoh regions.
        </p>
        <p>
          The park will provide each guest with a number of Pokeballs, with more
          available for purchase at the store. Use these Pokeballs to catch as
          many Pokemon as your heart desires!
        </p>
        <p>Visit the transit center to quickly move between areas!</p>
        <p>
          Certain Pokemon can only be found in certain areas, so be sure to
          explore the park fully if you want to catch them all! Each guest is
          provided with a Pokedex that contains basic information about the
          Pokemon in the park, including how difficult they are to catch and
          their location.
        </p>
        <p>
          Finally, each guest is given a journal to record their progress.
          Please be sure to write in it often!
        </p>
      </Flex>
    );
  }
}

HowItWorks.defaultProps = { cWidth: 100 };

HowItWorks.propTypes = {};

export default HowItWorks;
