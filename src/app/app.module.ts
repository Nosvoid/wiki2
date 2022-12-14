import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Routes
import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CostumeHatsComponent } from './costume-hats/costume-hats.component';
import { CostumeSetsComponent } from './costume-sets/costume-sets.component';
import { CostumesComponent } from './costumes/costumes.component';
import { CostumeWingsComponent } from './costume-wings/costume-wings.component';
import { WeaponSkinsComponent } from './weapon-skins/weapon-skins.component';
import { RulesComponent } from './rules/rules.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FairiesComponent } from './fairies/fairies.component';
import { ResistancesComponent } from './resistances/resistances.component';
import { BooksComponent } from './books/books.component';
import { RaidsComponent } from './raids/raids.component';
import { DailyQuestsComponent } from './daily-quests/daily-quests.component';
import { BadgesComponent } from './badges/badges.component';
import { PartnersComponent } from './partners/partners.component';
import { PspsComponent } from './psps/psps.component';
import { PetsComponent } from './pets/pets.component';
import { BattlePassComponent } from './battle-pass/battle-pass.component';
import { FeaturesComponent } from './features/features.component';
import { SpecialItemsComponent } from './special-items/special-items.component';
import { WhitelistDllComponent } from './whitelist-dll/whitelist-dll.component';
import { ObtainingSpsComponent } from './obtaining-sps/obtaining-sps.component';
import { SpPerfectionComponent } from './sp-perfection/sp-perfection.component';
import { SpUpgradeComponent } from './sp-upgrade/sp-upgrade.component';
import { SpWingsComponent } from './sp-wings/sp-wings.component';
import { DoubleBoxComponent } from './double-box/double-box.component';
import { HelmetsMasksComponent } from './helmets-masks/helmets-masks.component';
import { GoldComponent } from './gold/gold.component';
import { RaidDamageComponent } from './raid-damage/raid-damage.component';
import { ReputationComponent } from './reputation/reputation.component';
import { TitlesComponent } from './titles/titles.component';
import { Act4Component } from './act4/act4.component';
import { FishSystemComponent } from './fish-system/fish-system.component';
import { PrestigeSystemComponent } from './prestige-system/prestige-system.component';
import { WorldBossesComponent } from './world-bosses/world-bosses.component';
import { TattooCarveComponent } from './tattoo-carve/tattoo-carve.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { BecomingCcComponent } from './becoming-cc/becoming-cc.component';
import { ContentCreatorsComponent } from './content-creators/content-creators.component';
import { ShopUpdatesComponent } from './shop-updates/shop-updates.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';
import { TicketSystemComponent } from './ticket-system/ticket-system.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShellsComponent } from './shells/shells.component';
import { PvpSetComponent } from './pvp-set/pvp-set.component';
import { MouseEventComponent } from './mouse-event/mouse-event.component';
import { CookingSpComponent } from './cooking-sp/cooking-sp.component';
import { MountsComponent } from './mounts/mounts.component';
import { RainbowBattleComponent } from './rainbow-battle/rainbow-battle.component';
import { HalloweenEventComponent } from './halloween-event/halloween-event.component';
import { StarterGuideComponent } from './starter-guide/starter-guide.component';
import { PEightComponent } from './p-eight/p-eight.component';
import { PEightTwoComponent } from './p-eight-two/p-eight-two.component';
import { PEightOneComponent } from './p-eight-one/p-eight-one.component';
import { XmasEventComponent } from './xmas-event/xmas-event.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'staff-members', component: StaffMembersComponent },
  { path: 'hats', component: CostumeHatsComponent },
  { path: 'all-sets', component: CostumeSetsComponent },
  { path: 'costumes', component: CostumesComponent },
  { path: 'costume-wings', component: CostumeWingsComponent },
  { path: 'weapon-skins', component: WeaponSkinsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'fairies', component: FairiesComponent },
  { path: 'resistances', component: ResistancesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'raids', component: RaidsComponent },
  { path: 'daily-quests', component: DailyQuestsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'psps', component: PspsComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'battle-pass', component: BattlePassComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'special-items', component: SpecialItemsComponent },
  { path: 'whitelist-dll', component: WhitelistDllComponent },
  { path: 'sp-obtaining', component: ObtainingSpsComponent },
  { path: 'sp-perfection', component: SpPerfectionComponent },
  { path: 'sp-upgrade', component: SpUpgradeComponent },
  { path: 'sp-wings', component: SpWingsComponent },
  { path: 'double-box', component: DoubleBoxComponent },
  { path: 'helmets-masks', component: HelmetsMasksComponent },
  { path: 'gold-set', component: GoldComponent },
  { path: 'raid-set', component: RaidDamageComponent },
  { path: 'reputation-set', component: ReputationComponent },
  { path: 'titles', component: TitlesComponent },
  { path: 'act4', component: Act4Component },
  { path: 'fish-system', component: FishSystemComponent },
  { path: 'prestige-system', component: PrestigeSystemComponent },
  { path: 'world-bosses', component: WorldBossesComponent },
  { path: 'tattoos-carves', component: TattooCarveComponent },
  { path: 'becoming-content-creator', component: BecomingCcComponent },
  { path: 'content-creators', component: ContentCreatorsComponent },
  { path: 'shop-updates', component: ShopUpdatesComponent },
  { path: 'patch-notes', component: PatchNotesComponent },
  { path: 'ticket-system', component: TicketSystemComponent },
  { path: 'shells', component: ShellsComponent },
  { path: 'pvp-set', component: PvpSetComponent },
  { path: 'cooking-sp', component: CookingSpComponent },
  { path: 'mounts', component: MountsComponent },
  { path: 'rainbow-battle', component: RainbowBattleComponent },
  { path: 'mouse', component: MouseEventComponent },
  { path: 'halloween-event', component: HalloweenEventComponent },
  { path: 'starter-guide', component: StarterGuideComponent },
  { path: 'prestige-8', component: PEightComponent },
  { path: 'prestige-8-1', component: PEightOneComponent },
  { path: 'prestige-8-2', component: PEightTwoComponent },
  { path: 'xmas-event', component: XmasEventComponent },
  { path: '**', pathMatch: "full", component: ErrorPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CostumeHatsComponent,
    CostumeSetsComponent,
    CostumesComponent,
    CostumeWingsComponent,
    WeaponSkinsComponent,
    RulesComponent,
    ScheduleComponent,
    EquipementsComponent,
    AccessoriesComponent,
    FairiesComponent,
    ResistancesComponent,
    BooksComponent,
    RaidsComponent,
    DailyQuestsComponent,
    BadgesComponent,
    PartnersComponent,
    PspsComponent,
    PetsComponent,
    BattlePassComponent,
    FeaturesComponent,
    SpecialItemsComponent,
    WhitelistDllComponent,
    ObtainingSpsComponent,
    SpPerfectionComponent,
    SpUpgradeComponent,
    SpWingsComponent,
    DoubleBoxComponent,
    HelmetsMasksComponent,
    GoldComponent,
    RaidDamageComponent,
    ReputationComponent,
    TitlesComponent,
    Act4Component,
    FishSystemComponent,
    PrestigeSystemComponent,
    WorldBossesComponent,
    TattooCarveComponent,
    StaffMembersComponent,
    BecomingCcComponent,
    ContentCreatorsComponent,
    ShopUpdatesComponent,
    PatchNotesComponent,
    TicketSystemComponent,
    ErrorPageComponent,
    ShellsComponent,
    PvpSetComponent,
    MouseEventComponent,
    CookingSpComponent,
    MountsComponent,
    RainbowBattleComponent,
    HalloweenEventComponent,
    StarterGuideComponent,
    PEightComponent,
    PEightTwoComponent,
    PEightOneComponent,
    XmasEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload"}),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
