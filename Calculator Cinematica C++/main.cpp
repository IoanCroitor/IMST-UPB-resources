#include <iostream>

#include <cmath>

int main() {
    double k;
    std::cout << "Introduceti k: ";
    std::cin >> k;	
    std::cout << std::endl << "Rezultate:" << std::endl << std::endl;
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
    double phi2_deg_1 = phi2_rad_1 * 180 / M_PI;
    double phi2_deg_2 = phi2_rad_2 * 180 / M_PI;
    double sin_phi3 = (l1 * sin(phi1_rad) + l2 * sin(phi2_rad_1) - yE) / l3;


    double cos_phi3 = (l1 * cos(phi1_rad) + l2 * cos(phi2_rad_1) - xE) / l3;

    double phi3_rad = asin(sin_phi3);

    double phi3_rad_corrected;

    if (sin_phi3 > 0 && cos_phi3 < 0) {
        phi3_rad_corrected = M_PI - phi3_rad;
        std::cout << std::endl << "Phi3 se afla in cadranul 2" << std::endl;
    } else if (sin_phi3 < 0 && cos_phi3 < 0) {

        phi3_rad_corrected = M_PI + phi3_rad;
        std::cout << std::endl << "Phi3 se afla in cadranul 3" << std::endl;
    } else if (sin_phi3 < 0 && cos_phi3 > 0) {
        phi3_rad_corrected = 2 * M_PI - phi3_rad;
        std::cout << std::endl << "Phi3 se afla in cadranul 4" << std::endl;
    } else {

        phi3_rad_corrected = phi3_rad; // Cardran default nu este nevoie de ajustare
        std::cout << std::endl << "Phi3 se afla in cadranul 1" << std::endl;
    }

    //Corectat phi3 in grade
    double phi3 = phi3_rad_corrected * 180 / M_PI;
    // Corectat phi3 in radiani
    phi3_rad = phi3_rad_corrected;

    std::cout << "Pentru k=" << k << ":" << std::endl;
    std::cout << "Phi1: " << phi1_deg << " grade" << std::endl;
    std::cout << "Phi2_1: " << phi2_deg_1 << " grade" << std::endl;
    std::cout << "Phi2_2: " << phi2_deg_2 << " grade" << std::endl;
    std::cout << "Phi3: " << phi3 << " grade" << std::endl;

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

    std::cout << "omega2: " << omega2 << std::endl;
    std::cout << "omega3: " << omega3 << std::endl;

    double D1 = -pow(omega1, 2) * l1 * cos(phi1_rad) - pow(omega2, 2) * l2 * cos(phi2_rad_1) + pow(omega3, 2) * l3 * cos(phi3_rad);
    double D2 = pow(omega1, 2) * l1 * sin(phi1_rad) + pow(omega2, 2) * l2 * sin(phi2_rad_1) - pow(omega3, 2) * l3 * sin(phi3_rad);

    double delta2e = (D1 * B2 - D2 * B1);
    double delta3e = (A1 * D2 - A2 * D1);

    double epsilon2 = delta2e / delta1;
    double epsilon3 = delta3e / delta1;

    std::cout << "epsilon2: " << epsilon2 << std::endl;
    std::cout << "epsilon3: " << epsilon3 << std::endl;

    double sin_phi4 = (yF - yE - l3s * sin_phi3) / l4;
    double phi4_rad = asin(sin_phi4);
    double phi4 = phi4_rad * 180 / M_PI;
    double cos_phi4 = cos(phi4_rad);

    std::cout << "Phi4: " << phi4 << " grade" << std::endl;

    double omega4 = - (omega3 * l3s * cos_phi3) / (l4 * cos_phi4);

    double xF = xE + l3s * cos_phi3 + l4 * cos_phi4;

    std::cout<< "xF: " << xF << std::endl;

    std::cout << "omega4: " << omega4 << std::endl; 

    double VF = - omega3 * l3s * sin_phi3 - omega4 * l4 * sin_phi4;
    std::cout << "VF: " << VF << std::endl;

    double epsilon4 = - (epsilon3 * l3s * cos_phi3) + (pow(omega3 , 2) * l3s * sin_phi3) + (pow(omega4, 2) * l4 * sin_phi4) / (l4 * cos_phi4);
    std::cout<< "epsilon4: " << epsilon4 << std::endl;

    double AF = - epsilon3 * l3s * sin_phi3 - pow(omega3, 2) * l3s * cos_phi3 - epsilon4 * l4 * sin_phi4 - pow(omega4, 2) * l4 * cos_phi4;
    std::cout<< "AF: " << AF << std::endl;
    return 0;
}