import React from "react";


const MarvinFighters = () => {
  // Embedded JSON data structure for the entire page
  const teamData = {
    teamName: "Marvin Fighters",
    totalPlayers: 11,
    teamA: {
      name: "AUS",
      count: 4,
      // Sample Australia flag URL (replace if desired)
      flagUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    },
    teamB: {
      name: "IND",
      count: 7,
      // Sample India flag URL (replace if desired)
      flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    sections: [
      {
        title: "Wicket-Keepers",
        players: [
          {
            name: "L Rahul",
            team: "IND",
            role: "VC", // Vice-Captain
            // Sample player image (replace if desired)
            picUrl:
              "https://randomuser.me/api/portraits/men/31.jpg",
          },
          {
            name: "R Pant",
            team: "IND",
            role: "C", // Captain
            picUrl:
              "https://randomuser.me/api/portraits/men/32.jpg",
          },
        ],
      },
      {
        title: "Batters",
        players: [
          {
            name: "S Smith",
            team: "AUS",
            picUrl:
              "https://randomuser.me/api/portraits/men/33.jpg",
          },
          {
            name: "V Kohli",
            team: "IND",
            picUrl:
              "https://randomuser.me/api/portraits/men/34.jpg",
          },
        ],
      },
      {
        title: "All Rounders",
        players: [
          {
            name: "R Jadeja",
            team: "IND",
            picUrl:
              "https://randomuser.me/api/portraits/men/35.jpg",
          },
          {
            name: "M Marsh",
            team: "AUS",
            picUrl:
              "https://randomuser.me/api/portraits/men/36.jpg",
          },
          {
            name: "K Nitesh Re",
            team: "IND",
            picUrl:
              "https://randomuser.me/api/portraits/men/37.jpg",
          },
        ],
      },
      {
        title: "Bowlers",
        players: [
          {
            name: "P Cummins",
            team: "AUS",
            picUrl:
              "https://randomuser.me/api/portraits/men/38.jpg",
          },
          {
            name: "J Bumrah",
            team: "IND",
            picUrl:
              "https://randomuser.me/api/portraits/men/39.jpg",
          },
          {
            name: "N Lyon",
            team: "AUS",
            picUrl:
              "https://randomuser.me/api/portraits/men/40.jpg",
          },
          {
            name: "M Starc",
            team: "AUS",
            picUrl:
              "https://randomuser.me/api/portraits/men/41.jpg",
          },
        ],
      },
    ],
  };

  // Inline styles to replicate the field layout and cards
  const styles = {
    container: {
      backgroundColor: "#4a752c", // Outer green background
      minHeight: "100vh",
      width: "100%",
      padding: "20px",
      color: "#fff",
      fontFamily: "sans-serif",
      boxSizing: "border-box",
    },
    header: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      position: "relative",
    },
    closeIcon: {
      width: "24px",
      height: "24px",
      cursor: "pointer",
    },
    title: {
      flex: 1,
      textAlign: "center",
      fontSize: "20px",
      fontWeight: 700,
      margin: 0,
    },
    teamInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      marginBottom: "20px",
    },
    teamFlag: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    teamFlagImg: {
      width: "40px",
      height: "40px",
      marginBottom: "4px",
    },
    playersCount: {
      fontSize: "16px",
      fontWeight: 600,
    },
    field: {
      backgroundColor: "#5b8c34",
      borderRadius: "16px",
      padding: "20px",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: 700,
      margin: "20px 0 10px",
    },
    playerRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      marginBottom: "20px",
    },
    playerCard: {
      backgroundColor: "#6da544",
      borderRadius: "12px",
      padding: "10px",
      width: "120px",
      textAlign: "center",
      position: "relative",
    },
    playerImageContainer: {
      position: "relative",
      marginBottom: "8px",
    },
    playerImage: {
      width: "60px",
      height: "60px",
      borderRadius: "30px",
      objectFit: "cover",
    },
    badge: {
      position: "absolute",
      bottom: 0,
      right: "-4px",
      color: "#000",
      fontWeight: 700,
      fontSize: "10px",
      padding: "2px 4px",
      borderRadius: "6px",
    },
    cBadge: {
      backgroundColor: "#ffcb05", // Captain
    },
    vcBadge: {
      backgroundColor: "#00d1ff", // Vice-Captain
    },
    playerName: {
      fontSize: "14px",
      fontWeight: 600,
      marginBottom: "4px",
    },
    playerTeam: {
      fontSize: "12px",
      fontWeight: 500,
      color: "#f0f0f0",
    
},
field: {
        position: "relative",
        background: "radial-gradient(ellipse at center, #66bb6a 0%, #4a752c 100%)",
        borderRadius: "16px",
        width: "90%",
        margin: "0 auto",
        minHeight: "600px",
        overflow: "hidden",
        // Remove padding if you're doing precise absolute positioning:
        // padding: "20px", 
      },
      playerRow: {
        // Remove the flex layout:
        // display: "flex",
        // flexWrap: "wrap",
        // gap: "16px",
        // Instead, you can do absolute positioning per group:
        position: "absolute",
        // Example coordinates (tweak as needed):
        top: "50px",
        left: "50%",
        transform: "translateX(-50%)",
      },
      wkRow: {
        position: "absolute",
        top: "50px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "40px",
      },
      batterRow: {
        position: "absolute",
        top: "150px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "60px",
      },
      // ...and so on for All Rounders, Bowlers
            
      
    
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        {/* Close icon from a public URL (replace if you have your own) */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2938/2938566.png"
          alt="Close"
          style={styles.closeIcon}
        />
        <h1 style={styles.title}>{teamData.teamName}</h1>
      </div>

      {/* Team Info */}
      <div style={styles.teamInfo}>
        <div style={styles.teamFlag}>
          <img
            src={teamData.teamA.flagUrl}
            alt={teamData.teamA.name}
            style={styles.teamFlagImg}
          />
          <span>{`${teamData.teamA.name} (${teamData.teamA.count})`}</span>
        </div>
        <div style={styles.playersCount}>
          {`Players ${teamData.totalPlayers} of ${teamData.totalPlayers}`}
        </div>
        <div style={styles.teamFlag}>
          <img
            src={teamData.teamB.flagUrl}
            alt={teamData.teamB.name}
            style={styles.teamFlagImg}
          />
          <span>{`(${teamData.teamB.count}) ${teamData.teamB.name}`}</span>
        </div>
      </div>

      {/* Field */}
      <div style={styles.field}>
        {teamData.sections.map((section, index) => (
          <div key={index}>
            <div style={styles.sectionTitle}>{section.title}</div>
            <div style={styles.playerRow}>
              {section.players.map((player, pIndex) => {
                // Determine badge style if role is "C" or "VC"
                let badgeStyle = {};
                if (player.role === "C") badgeStyle = styles.cBadge;
                if (player.role === "VC") badgeStyle = styles.vcBadge;

                return (
                  <div key={pIndex} style={styles.playerCard}>
                    <div style={styles.playerImageContainer}>
                      <img
                        src={player.picUrl}
                        alt={player.name}
                        style={styles.playerImage}
                      />
                      {player.role && (
                        <div style={{ ...styles.badge, ...badgeStyle }}>
                          {player.role}
                        </div>
                      )}
                    </div>
                    <div style={styles.playerName}>{player.name}</div>
                    <div style={styles.playerTeam}>{player.team}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarvinFighters;
