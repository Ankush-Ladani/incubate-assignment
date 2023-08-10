import React from "react";
import Description from "./Description";
import Title from "./Title";
import Highlight from "./Highlight";
import SecondaryTitle from "./SecondaryTitle";
import OrderedListItem from "./OrderedListItem";
import UnorderedListItem from "./UnorderedListItem";

const ProblemStatement = () => {
  return (
    <div className="mt-10">
      <Title title={"Problem Statement"} />
      <Highlight
        content={"Chandrayaan 3 Lunar Craft: Galactic Space Craft Control"}
      />
      <SecondaryTitle title={"Description"} />
      <Description
        description={`As a scientist at ISRO controlling the latest lunar spacecraft Chandrayaan 3, your task is to develop a program that translates commands sent from Earth into instructions understood by the spacecraft. The spacecraft navigates through the galaxy using galactic coordinates, represented by x, y, z coordinates (x for east or west location, y for north or south location, and z for distance above or below the galactic plane).`}
      />
      <SecondaryTitle title={"Requirements"} />
      <Description
        style={"mb-4"}
        description={`You will be given the initial starting point (x, y, z) of the spacecraft and the direction it is facing (N, S, E, W, Up, Down). The spacecraft receives a character array of commands, and you are required to implement the following functionalities:`}
      />
      <OrderedListItem
        textTitle={"Move"}
        sno={1}
        pointDescription={`the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.`}
      />
      <OrderedListItem
        textTitle={"Turn"}
        sno={2}
        pointDescription={`the spacecraft left/right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.`}
      />
      <OrderedListItem
        textTitle={"Turn"}
        sno={3}
        pointDescription={`the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.`}
      />
      <br />
      <Highlight content={"Note:"} />
      <br />
      <br />
      <UnorderedListItem
        content={
          "The spacecraft’s initial direction (N, S, E, W, Up, Down) represents the reference frame for movement and rotation."
        }
      />
      <UnorderedListItem
        content={
          "The spacecraft cannot move or rotate diagonally; it can only move in the direction it is currently facing."
        }
      />
      <UnorderedListItem
        content={
          "Assume that the spacecraft’s movement and rotations are rigid, and it cannot move beyond the galactic boundaries."
        }
      />
      <SecondaryTitle title={"Example"} />
      <Description
        description={
          "Given the starting point (0, 0, 0) following (x, y, z) and initial direction N, the following commands should result in the indicated final position and direction:"
        }
      />
      <div className="flex mt-4">
        <Highlight content={"Commands:"} />
        <Description description={" [“f”, “r”, “u”, “b”, “l”]"} />
      </div>
      <div className="flex mt-4">
        <Highlight content={"Starting Position:"} />
        <Description style={"ml-1"} description={"(0, 0, 0)"} />
      </div>
      <div className="flex mt-4 mb-3">
        <Highlight content={"Initial Direction:"} />
        <Description style={"ml-1"} description={"N"} />
      </div>
      <UnorderedListItem content={"“f” - (0, 1, 0) - N"} />
      <UnorderedListItem content={"“r” - (0, 1, 0) - E"} />
      <UnorderedListItem content={"“u” - (0, 1, 0) - U"} />
      <UnorderedListItem content={"“b” - (0, 1, -1) - W"} />
      <UnorderedListItem content={"“l” - (0, 1, -1) - N"} />
      <div className="flex mt-4">
        <Highlight content={"Final Position:"} />
        <Description style={"ml-1"} description={"(0, 1, -1)"} />
      </div>
      <div className="flex mt-4 mb-4">
        <Highlight content={"Final Direction:"} />
        <Description style={"ml-1"} description={"W"} />
      </div>
      <Description
        description={
          "Your task is to design the program that enables Chandrayaan 3 to execute these commands accurately and efficiently in the vast expanse of the galaxy:"
        }
      />
      <UnorderedListItem
        content={
          "Make sure to take an incremental approach and show it in the commits"
        }
      />
      <UnorderedListItem
        content={"Keep your code clean, readable, and modularized"}
      />
      <UnorderedListItem
        content={"Do not throw exceptions/handle cases for invalid arguments"}
      />
    </div>
  );
};

export default ProblemStatement;
