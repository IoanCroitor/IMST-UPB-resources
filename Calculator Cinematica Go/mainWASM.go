package main

import (
	"math"
	"syscall/js"
)

type MechanismResults struct {
    Phi1Deg, Phi2Deg1, Phi2Deg2, Phi3, Omega2, Omega3, Epsilon2, Epsilon3, Phi4 float64
}

func calculateMechanism(this js.Value, args []js.Value) interface{} {
    k := args[0].Float()
    var results MechanismResults
    l1 := 0.029
    l2 := 0.104
    l3 := 0.078
    l3s := 0.048
    l4 := 0.094
    xE := 0.085
    yE := -0.014
    yF := 0.0
    phi1Deg := k * 10
    phi1Rad := phi1Deg * math.Pi / 180
    omega1 := 2.0

    // The calculations remain the same, just translated to Go's syntax and math functions
    A := 2 * (l1*l2*math.Cos(phi1Rad) - l2*xE)
    B := 2 * (l1*l2*math.Sin(phi1Rad) - l2*yE)
    C := math.Pow(l3, 2) - math.Pow(l1, 2) - math.Pow(l2, 2) - math.Pow(xE, 2) - math.Pow(yE, 2) + 2*l1*xE*math.Cos(phi1Rad) + 2*l1*yE*math.Sin(phi1Rad)
    term1 := 2 * B * C
    term2 := math.Sqrt(4*math.Pow(B, 2)*math.Pow(C, 2) - 4*(math.Pow(A, 2)+math.Pow(B, 2))*(math.Pow(C, 2)-math.Pow(A, 2)))
    term3 := 2 * (math.Pow(A, 2) + math.Pow(B, 2))
    sinPhi21 := (term1 + term2) / term3
    sinPhi22 := (term1 - term2) / term3
    phi2Rad1 := math.Asin(sinPhi21)
    phi2Rad2 := math.Asin(sinPhi22)
    // Continue with the rest of the calculations...

    // Convert results to a map for js.Value conversion
    resultMap := map[string]interface{}{
        "phi1Deg":  results.Phi1Deg,
        "phi2Deg1": results.Phi2Deg1,
        "phi2Deg2": results.Phi2Deg2,
        "phi3":     results.Phi3,
        "omega2":   results.Omega2,
        "omega3":   results.Omega3,
        "epsilon2": results.Epsilon2,
        "epsilon3": results.Epsilon3,
        "phi4":     results.Phi4,
    }
    return resultMap
}

func registerCallbacks() {
    js.Global().Set("calculateMechanism", js.FuncOf(calculateMechanism))
}

func main() {
    c := make(chan struct{}, 0)
    registerCallbacks()
    <-c
}