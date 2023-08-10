import React from "react";
import OrderedListItem from "./OrderedListItem";
import Description from "./Description";

const ImpThings = () => {
  return (
    <div className="mt-10 mx-80">
      <Description
        description={
          "1. Host your solution on a public GitHub/GitLab repository"
        }
      />
      <p className={`text-gray-500`}>
        2. Follow best practices for TDD. Watch{" "}
        <a className="text-blue-400" href="#">
          this video
        </a>{" "}
        to understand TDD better
      </p>
      <Description
        description={
          "3. Commit your changes frequently to show how your code evolves with every step of TDD"
        }
      />
      <Description
        description={
          "4. We encourage you to use the programming language and tools you feel most comfortable with"
        }
      />
      <Description
        description={
          "5. Do not rush, take your time, we want to see your best work!"
        }
      />
      <Description
        description={
          "6. Send us the link to your repo once you’re happy with what you’ve done"
        }
      />
    </div>
  );
};

export default ImpThings;
