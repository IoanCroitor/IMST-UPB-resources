#include <cmath>
#include <vector>
#include <iostream>


// Define a struct to hold the output values
struct MechanismResults {
    double phi1_deg, phi2_deg_1, phi2_deg_2, phi3, omega2, omega3, epsilon2, epsilon3, phi4;
};

extern "C" {
// Function that calculates mechanism positions, velocities, and accelerations
int calculateMechanism(double k) {
    MechanismResults results;
    k=2;
    double l1 = 0.029;
    double l2 = 0.104;
    double l3 = 0.078;
    double l3s = 0.048;
    double l4 = 0.094;
    double xE = 0.085;
    double yE = -0.014;
    double yF = 0;
    double phi1_deg = k * 10;
    double phi1_rad = phi1_deg * M_PI / 180;
    double omega1 = 2;

    double A = 2 * (l1 * l2 * cos(phi1_rad) - l2 * xE);
    double B = 2 * (l1 * l2 * sin(phi1_rad) - l2 * yE);
    double C = pow(l3, 2) - pow(l1, 2) - pow(l2, 2) - pow(xE, 2) - pow(yE, 2) + 2 * l1 * xE * cos(phi1_rad) + 2 * l1 * yE * sin(phi1_rad);
    double term1 = 2 * B * C;
    double term2 = sqrt(4 * pow(B, 2) * pow(C, 2) - 4 * (pow(A, 2) + pow(B, 2)) * (pow(C, 2) - pow(A, 2)));
    double term3 = 2 * (pow(A, 2) + pow(B, 2));
    double sin_phi2_1 = (term1 + term2) / term3;
    double sin_phi2_2 = (term1 - term2) / term3;
    double phi2_rad_1 = asin(sin_phi2_1);
    double phi2_rad_2 = asin(sin_phi2_2);
    results.phi2_deg_1 = phi2_rad_1 * 180 / M_PI;
    results.phi2_deg_2 = phi2_rad_2 * 180 / M_PI;
    double sin_phi3 = (l1 * sin(phi1_rad) + l2 * sin(phi2_rad_1) - yE) / l3;
    double cos_phi3 = (l1 * cos(phi1_rad) + l2 * cos(phi2_rad_1) - xE) / l3;
    double phi3_rad = asin(sin_phi3);
    double phi3_rad_corrected;

    if (sin_phi3 > 0 && cos_phi3 < 0) {
        phi3_rad_corrected = M_PI - phi3_rad;
    } else if (sin_phi3 < 0 && cos_phi3 < 0) {
        phi3_rad_corrected = M_PI + phi3_rad;
    } else if (sin_phi3 < 0 && cos_phi3 > 0) {
        phi3_rad_corrected = 2 * M_PI - phi3_rad;
    } else {
        phi3_rad_corrected = phi3_rad;
    }

    results.phi3 = phi3_rad_corrected * 180 / M_PI;
    phi3_rad = phi3_rad_corrected;
    results.phi1_deg = phi1_deg;

    double A1 = l2 * sin(phi2_rad_1);
    double A2 = l2 * cos(phi2_rad_1);
    double B1 = -l3 * sin(phi3_rad);
    double B2 = -l3 * cos(phi3_rad);
    double C1 = -l1 * omega1 * sin(phi1_rad);
    double C2 = -l1 * omega1 * cos(phi1_rad);

    double delta1 = (A1 * B2 - A2 * B1);
    double delta2w = (C1 * B2 - C2 * B1);
    double delta3w = (A1 * C2 - A2 * C1);

    double omega2 = delta2w / delta1;
    double omega3 = delta3w / delta1;

    results.omega2 = delta2w / delta1;
    results.omega3 = delta3w / delta1;

    double D1 = -pow(omega1, 2) * l1 * cos(phi1_rad) - pow(omega2, 2) * l2 * cos(phi2_rad_1) + pow(omega3, 2) * l3 * cos(phi3_rad);
    double D2 = pow(omega1, 2) * l1 * sin(phi1_rad) + pow(omega2, 2) * l2 * sin(phi2_rad_1) - pow(omega3, 2) * l3 * sin(phi3_rad);

    double delta2e = (D1 * B2 - D2 * B1);
    double delta3e = (A1 * D2 - A2 * D1);

    results.epsilon2 = delta2e / delta1;
    results.epsilon3 = delta3e / delta1;

    double sin_phi4 = (yF - yE - l3s * sin_phi3) / l4;
    double phi4_rad = asin(sin_phi4);
    results.phi4 = phi4_rad * 180 / M_PI;
    return results.phi4;
}

}
