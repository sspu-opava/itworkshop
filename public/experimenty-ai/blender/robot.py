import bpy

# Přidáváme objekty do nové scény, nic nemažeme.
scena = bpy.data.scenes.new("Robot Byte")
bpy.context.window.scene = scena

def material(nazev, rgb):
    m = bpy.data.materials.new(nazev)
    m.diffuse_color = (*rgb, 1)
    return m

modra = material("Modrá", (0.05, 0.22, 0.8))
bila = material("Bílá", (0.9, 0.9, 0.9))
tmava = material("Tmavá", (0.03, 0.04, 0.06))
zluta = material("Žlutá", (1, 0.65, 0.05))

def kvadr(nazev, poloha, rozmery, barva):
    bpy.ops.mesh.primitive_cube_add(size=1, location=poloha)
    o = bpy.context.object
    o.name = nazev
    o.scale = rozmery
    o.data.materials.append(barva)
    return o

kvadr("Tělo", (0, 0, 1.35), (1.3, 0.8, 1.4), modra)
kvadr("Hlava", (0, 0, 2.55), (1.6, 0.9, 0.9), modra)
for x in (-0.45, 0.45):
    kvadr("Oko", (x, -0.47, 2.65), (0.32, 0.12, 0.28), bila)
    kvadr("Zornice", (x, -0.54, 2.65), (0.12, 0.04, 0.12), tmava)
    kvadr("Noha", (x, 0, 0.35), (0.42, 0.65, 0.7), tmava)
for x in (-0.9, 0.9):
    kvadr("Ruka", (x, 0, 1.4), (0.35, 0.6, 1.1), modra)
kvadr("Panel", (0, -0.43, 1.45), (0.65, 0.1, 0.4), zluta)
kvadr("Anténa", (0, 0, 3.15), (0.1, 0.1, 0.35), tmava)
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.13, location=(0, 0, 3.4))
bpy.context.object.name = "Světlo antény"
bpy.context.object.data.materials.append(zluta)
